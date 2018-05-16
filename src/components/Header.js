// Import librarbier for component
import React from 'react';
import { Text, View } from 'react-native';

// make component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'rgb(61,39,88)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: 'rgb(231, 225, 237)',
    fontSize: 28
  }
};

//make available to other bits of app
export default Header;
