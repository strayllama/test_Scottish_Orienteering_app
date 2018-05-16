import React from 'react';
import axios from 'axios';  // API request
import EventsContainer from './EventsContainer.js';

class ApiAccessor extends React.Component {
  state = {
    allEvents: [],
    scotlandRegionUrl: 'https://www.britishorienteering.org.uk/fixturesjson.php?assoc=soa',
    allEventsUrl: 'https://www.britishorienteering.org.uk/fixturesjson.php?filters'
  }
  componentWillMount() {
    axios.get(this.state.scotlandRegionUrl)
      .then(response => {
        this.setState({ allEvents: response.data });
      }
    );
  }

  render() {
    return (
      <EventsContainer data={this.state.allEvents} />
    );
  } // end render

} // end class

export default ApiAccessor;
