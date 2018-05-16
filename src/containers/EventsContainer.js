import React from 'react';
import { AppRegistry, View, Text, Switch, Platform, StyleSheet } from 'react-native';
import Header from '../components/Header.js';
import EventList from '../components/EventList.js';
import StartDatePicker from '../components/StartDatePicker.js';
import LocationPicker from '../components/LocationPicker.js';

const EventContainer = ({ data }) => {

    // this.mapToggle = function () {
    //   console.log('Map Toggle Changed Status');
    // };

    console.log(data)
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
      <EventList data={data} />
    </View>
  )
}

export default EventContainer;
