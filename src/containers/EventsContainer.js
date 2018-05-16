import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import Header from '../components/Header.js';
import EventList from '../components/EventList.js';
import StartDatePicker from '../components/StartDatePicker.js';
// import LocationPicker from '../components/LocationPicker.js';
import Button from '../components/Button.js';
// import LocationPicker from '../components/LocationPicker.js';

class EventsContainer extends Component {
  constructor(props) {
     super(props);
     this.state = { printList: false };
  }

  showList() {
    this.setState({ printList: true });
  }

  render() {
    return (
      <View>
        <Header headerText={'Scottish Orienteering'} />
        <Text>Search for Orienteering events!
          Pick start date and time period.
        </Text>
        <View style={style.filtersBox}>
        <StartDatePicker />
        <Switch
          // onValueChange={this.mapToggle()}
          thumbTintColor='rgb(140, 58, 212)'
          onTintColor='rgb(73, 175, 31)'
        /><Text>Show Map</Text>
        {/* <LocationPicker /> */}
          <Button onPress={() => this.showList()}>Show Events</Button>
        </View>
        {this.state.printList && <EventList data={this.props.data} /> }
        {/* <EventList data={this.props.data} /> */}
      </View>
    );
  } // end render

} // end class

const style = {
  filtersBox: {
    height: 150
  }
};

export default EventsContainer;
