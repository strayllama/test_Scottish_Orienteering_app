import React from 'react';
import axios from 'axios';  // API request
import { AsyncStorage, View } from 'react-native';
import EventsContainer from './EventsContainer.js';
// import Storage from './AsyncStorage.js';

class ApiAccessor extends React.Component {
  state = {
    allEvents: [],
    timeSinceLastApiRequest: 1,
    scotlandRegionUrl: 'https://www.britishorienteering.org.uk/fixturesjson.php?assoc=soa',
    allEventsUrl: 'https://www.britishorienteering.org.uk/fixturesjson.php?filters'
  }

  setEventsButtonActive() {
    console.log('Will NOW turn on Show Events button.');
  }

  componentDidMount() {
    this.getAsyncData(() => {
      console.log('AllEvents array length:', this.state.allEvents.length);
      if (this.state.allEvents.length === 0 && this.state.timeSinceLastApiRequest > 2) {
        console.log('Requested API data: AsyncStorage is empty or its been +2 hours since last.');
        this.requestApiData();
      } else {
        console.log('Not requesting API as data already in AsyncStorage.');
        // console.log(this.state.allEvents);
        this.setEventsButtonActive();
      }
    });
  } // end DidMount

  async getAsyncData(callback) {
    try {
      const value = await AsyncStorage.getItem('@allEvents:key');
      this.setState({ allEvents: JSON.parse(value) });
      // console.log('Requesting data from AsyncStorage, revieved:');
      // console.log(value);
    } catch (error) {
      console.log('Error setting data ', error);
    }
    callback();
  }

  async saveToAsyncData() {
    const obj = JSON.stringify(this.state.allEvents);
    console.log('Trying to save the following to AsyncStorage:', obj);
    try {
      await AsyncStorage.setItem('@allEvents:key', obj);
    } catch (e) {
      console.log('Error setting data ', e);
    }
  }

  requestApiData() {
    axios.get(this.state.allEventsUrl)
    // axios.get(this.state.scotlandRegionUrl)
    .then(response => {
      this.setState({ allEvents: response.data }, () => this.setEventsButtonActive());
      console.log('Saved Response data to allEvents in state, as an array:');
      this.saveToAsyncData();
    });
  }

  render() {
    return (
      <View>
        <EventsContainer data={this.state.allEvents} />
      </View>
    );
  }

} // end class

export default ApiAccessor;
