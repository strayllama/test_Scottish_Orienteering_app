import React from 'react';
import axios from 'axios';  // API request
import { AsyncStorage, View } from 'react-native';
import EventsContainer from './EventsContainer.js';
// import Storage from './AsyncStorage.js';

class ApiAccessor extends React.Component {
  state = {
    allEvents: [],
//    scotlandRegionUrl: 'https://www.britishorienteering.org.uk/fixturesjson.php?assoc=soa',
    allEventsUrl: 'https://www.britishorienteering.org.uk/fixturesjson.php?filters'
  }

  componentDidMount() {
    this.getAsyncData(() => {
      // console.log('AllEvents array length:', this.state.allEvents.length);
      if (this.state.allEvents.length === 0) {
        console.log('Requesting API data as AsyncStorage AND State are empty.');
        this.requestApiData();
      } else {
        console.log('Not requesting API data as event Array is !=== 0, so filled from Async Storage!?');
        // console.log(this.state.allEvents);
      }
    });
  } // end DidMount

  async getAsyncData(callback) {
    try {
      const value = await AsyncStorage.getItem('@allEvents:key');
      this.setState({ allEvents: value });
      // console.log('Requesting data from AsyncStorage, revieved:');
      // console.log(value);
    } catch (e) {
      console.log('Error setting data ', e);
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
        this.setState({ allEvents: response.data });
        console.log('Saved Response data to State.allEvents as array:');
        // console.log(this.state.allEvents);
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
