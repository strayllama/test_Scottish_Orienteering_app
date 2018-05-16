import React, { Component } from 'react';
import { View, Text, Switch, Linking } from 'react-native';
import Header from '../components/Header.js';
import EventList from '../components/EventList.js';
import StartDatePicker from '../components/StartDatePicker.js';
import Button from '../components/Button.js';
// import LocationPicker from '../components/LocationPicker.js';

class EventsContainer extends Component {

  // this.mapToggle = function () {
  //   console.log('Map Toggle Changed Status');
  // };


  render() {
    return (
      <View>
        <Header headerText={'Scottish Orienteering'} />
        <Text>Search for Orienteering events!
          Pick start date and time period.
        </Text>
        <StartDatePicker />
        <Switch
          // onValueChange={this.mapToggle()}
          thumbTintColor='rgb(140, 58, 212)'
          onTintColor='rgb(73, 175, 31)'
        /><Text>Show Map</Text>
        {/* <LocationPicker /> */}
        <Button onPress={() => { Linking.openURL('http://google.co.uk'); }}>Show Events</Button>
        {/* <EventList data={this.props.data} /> */}
      </View>
    );
  } // end render

} // end class

export default EventsContainer;
