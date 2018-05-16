// Import librarbier for component
import React, { Component, Picker } from 'react';

// make component
class LocationPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'current'
    };
  }

  render() {
    return (
      <Picker
        selectedValue={this.state.location}
        style={{ height: 50, width: 100 }}
         onValueChange={(itemValue) => this.setState({ language: itemValue })}
      >
          <Picker.Item label="Current Location" value="current" />
          <Picker.Item label="Edinbinburgh" value="edinburgh" />
          <Picker.Item label="Glasgow" value="glasgow" />
          <Picker.Item label="Dundee" value="dundee" />
          <Picker.Item label="Stirling" value="stirling" />
          <Picker.Item label="Aberdeen" value="aberdeen" />
        </Picker>
      );
  }

} // end

//make available to other bits of app
export default LocationPicker;
