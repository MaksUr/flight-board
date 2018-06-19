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

  };



  render() {
    var flights = this.props.flights; 
    var isEditable = this.props.tableSettings.editableStatus;
    return (
      <div>
        <Table flights={flights} editableTable={isEditable} />        
      </div>
    )
    ;
  }
};  


export default FlightTable;
