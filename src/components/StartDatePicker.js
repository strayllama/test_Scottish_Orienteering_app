// Import librarbier for component
import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';

// make component
class StartDatePicker extends Component {
  constructor(props) {
    super(props);
    const dateNow = '2018/05/15';
    // const dateInOneYear =
    this.state = { startDate: dateNow }; // system date now
//    console.log('Start Date:' + this.state.startDate);
  }

  render() {
    return (
      <DatePicker
        style={{ width: 200 }}
        date={this.state.dateStartDate}
        mode="date"
        placeholder="Events from Date"
        format="YYYY-MM-DD"
        minDate={this.dataNow}
        maxDate="2019-12-30"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => { this.setState({ startDate: date }); }}

      >Search from Date:</DatePicker>
    );
  }
}


//make available to other bits of app
export default StartDatePicker;
