import React from 'react';
import EventsContainer from './EventsContainer.js';
import axios from 'axios';  // API request

class ApiAccessor extends React.Component {

  state = {
    allEvents: [],
    scotlandRegionUrl: 'https://www.britishorienteering.org.uk/fixturesjson.php?assoc=soa',
    allEventsUrl: 'https://www.britishorienteering.org.uk/fixturesjson.php?filters'
  }

  render() {
    return (
      <EventsContainer data={this.state.allEvents}/>
    )
  }

  componentWillMount() {
    axios.get(this.state.scotlandRegionUrl)
      .then(response => {
        this.setState({ allEvents: response.data });
      }
    );
  }
}

export default ApiAccessor
