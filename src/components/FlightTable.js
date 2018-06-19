import React from 'react'
import PropTypes from 'prop-types'
import Table from './Table'

class FlightTable extends React.Component {
  static propTypes = {
    flights: PropTypes.arrayOf(PropTypes.shape(
      {
        flightNumber: PropTypes.string.isRequired
      }
    ).isRequired).isRequired,


    tableSettings: PropTypes.shape({
      editableStatus: PropTypes.bool.isRequired  
    }).isRequired,    
    editFlights: PropTypes.func.isRequired
  };


  render() {
    var flights = this.props.flights; 
    var isEditable = this.props.tableSettings.editableStatus;
    var editFlights = this.props.editFlights;
    return (
      <div>
        <Table flights={flights} editableTable={isEditable} editFlights={editFlights} />        
      </div>
    )
    ;
  }
};  


export default FlightTable;
