import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';  // API request
import EventItem from './EventItem.js';

class EventList extends Component {
  // createEventString(event) {
  //   return `${event.date} CLUB: ${event.club} VENUE: ${event.venue}`;
  // }

  renderEvents() {
    return this.props.data.map(event => {
      return (
        <EventItem
          key={event.number}
          event={event}
        />
      );
    });
  }

  render() {
    // console.log(this.props.data);
    return (
      <ScrollView>
        {this.renderEvents()}
      </ScrollView>
    );
  } // end render()

} // end class

export default EventList;
