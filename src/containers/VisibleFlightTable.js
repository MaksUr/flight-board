import { connect } from 'react-redux'
import FlightTable from '../components/FlightTable'
import { changeOrderFlights } from '../actions'
import { bindActionCreators } from 'redux'


const mapStateToProps = state => (

{
  flights: state.flights,
  tableSettings: state.tableSettings
})

function mapDispatchToProps(dispatch) {
  return {
    editFlights: bindActionCreators(changeOrderFlights, dispatch)
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightTable)


