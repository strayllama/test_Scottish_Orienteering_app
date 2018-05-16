import React from 'react';
import { ScrollView } from 'react-native';
import EventItem from './EventItem.js';

const EventList = ({ data }) => {
  console.log(data.length);
  const eventsList = data.map((event) => <EventItem key={event.number} event={event} />);

  return (
    <ScrollView>
      {eventsList}
    </ScrollView>
  );
}; // end render()

export default EventList;
