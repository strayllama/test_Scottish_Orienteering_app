import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';
//import Link from './Link.js';
import Button from './Button.js';


const EventItem = ({ event }) => {
  const { date, level, club, venue, link } = event;
  const { imageStyle, headerTextStyle, headerContentStyle, imageBoxStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View style={imageBoxStyle}>
          <Image
            style={imageStyle}
            source={require('../images/soa_logo_2017.png')}
          />;
        </View>
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
  },
  imageStyle: {
    height: 26,
    width: 90
  },
  imageBoxStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  }
};

export default EventItem;
