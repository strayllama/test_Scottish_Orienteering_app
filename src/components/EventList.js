import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import EventItem from './EventItem.js';

class EventList extends Component {
  // createEventString(event) {
  //   return `${event.date} CLUB: ${event.club} VENUE: ${event.venue}`;
  // }
  const events = props.data.map(event => {
      return <EventItem key={event.number} event={event} />
  });

  render() {
    console.log('AllEvents array passed to Event list as:');
    console.log(this.props.data);
    return (
      <ScrollView>
        {events}
      </ScrollView>
    );
  } // end render()

} // end class

export default EventList;
