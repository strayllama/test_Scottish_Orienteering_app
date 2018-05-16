import React from 'react';
import { Text, View, Linking } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';
import Button from './Button.js';

const EventItem = ({ event }) => {
  const { date, level, club, venue, link } = event;
  const { headerTextStyle, headerContentStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{date}</Text>
          <Text>LEVEL: {level}</Text>
          <Text>CLUB: {club}</Text>
          <Text>VENUE: {venue}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(link)}>BOF Site</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flex: 1,
    width: null,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  }
};

export default EventItem;
