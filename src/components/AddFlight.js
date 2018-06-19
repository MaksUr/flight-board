import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

class AddFlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flightIsCorrect: false,
      departureIsCorrect: false,
    };
  };  
  
  static propTypes = {
    addFlight: PropTypes.func.isRequired,    
  }

  handleSubmit = (event) => {
    var flight = this.refs.inputNewFlight.value;
    var departure = this.refs.inputNewDeparture.value;
    this.props.addFlight({flightNumber: flight, departure: departure});
    this.refs.inputNewFlight.value = '';
    this.refs.inputNewDeparture.value = '';
    this.setState({
      flightIsCorrect: false,
      departureIsCorrect: false,
    });
  }

  setValidateState = (event, stateKey, validator) => {
    var value = event.target.value;
    var match =  validator(value);
    if (match !== this.state[stateKey]) {
      var state = {};
      state[stateKey] = match;
      this.setState(state);
    };
  }


  flightOnChange = (event) => {
    this.setValidateState(event, 'flightIsCorrect', function (value) { return !((value.search(/^[A-Z]{2,3}-([0-9]{1,4})$/i))===(-1)); })    
  }

  departureOnChange = (event) => {
    this.setValidateState(event, 'departureIsCorrect', function (value) { return moment(value, "YYYY-MM-DD HH:mm", true).isValid(); })    
  }

  render() {
    return (
        <div>
          <div>
            <input type="text" placeholder="Flight (IATA)" ref="inputNewFlight" onChange={this.flightOnChange}/>
          </div>
          <div>
            <input type="text" placeholder="Departure" ref="inputNewDeparture" onChange={this.departureOnChange}/>
          </div>
          <div>          
            <button
              type="button" 
              onClick={this.handleSubmit}
              disabled={!(this.state.flightIsCorrect && this.state.departureIsCorrect)}
            >
            Add flight
            </button>
          </div>
        </div>
    );
  }
};

export default AddFlight;