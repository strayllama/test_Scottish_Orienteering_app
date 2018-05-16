import React from 'react';
import axios from 'axios';  // API request
import { AsyncStorage, View } from 'react-native';
import EventsContainer from './EventsContainer.js';
// import Storage from './AsyncStorage.js';

class ApiAccessor extends React.Component {
  state = {
    allEvents: [],
    scotlandRegionUrl: 'https://www.britishorienteering.org.uk/fixturesjson.php?assoc=soa',
    allEventsUrl: 'https://www.britishorienteering.org.uk/fixturesjson.php?filters'
  }

  componentDidMount() {
    this.getAsyncData(() => {
      if (this.state.allEvents.length === 0) {
        console.log('Requesting API data as AsyncStorage AND State are empty.');
        this.requestApiData();
      } else {
        console.log('Not requesting API data as state has been populated from Async Storage!');
        console.log(this.state.allEvents);
      }
    });
  } // end DidMount

  async getAsyncData(callback) {
    try {
      const value = await AsyncStorage.getItem('@allEvents:key');
      this.setState({ allEvents: value });
      console.log('GOT THE DATA FROM ASYNCSTORAGE:');
      console.log(value);
    } catch (e) {
      console.log('Error setting data ', e);
    }
    callback();
  }

  async saveToAsyncData() {
    const obj = JSON.stringify(this.state.allEvents);
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
        console.log(this.state.allEvents);
        // this.saveApiData();
        this.saveToAsyncData();
      });
  }

  // saveApiData() {
  //   console.log('Trying to save array allEvents to AsyncStorage!!');
  //   try {
  //     AsyncStorage.setItem('@allEvents:key', JSON.stringify(this.state.allEvents));
  //   } catch (error) {
  //     console.log('Error saving data', error);
  //   }
  //
  //   console.log('This was send to AsyncStorage:');
  //   console.log(JSON.stringify(this.state.allEvents));
  //
  //   // console.log('This is what is in AsyncStorage: ');
  //   // AsyncStorage.getItem('allEvents', (value) => {
  //   //   console.log(JSON.parse(value));
  //   // });
  // }

  render() {
    return (
      <View>
        <EventsContainer data={this.state.allEvents} />
      </View>
    );
  } // end render

} // end class

export default ApiAccessor;
