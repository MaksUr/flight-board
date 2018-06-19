import { connect } from 'react-redux'
import FlightTable from '../components/FlightTable'



// function mapStateToProps (state) {
//     // console.log(state);
//   return {
//     flights: state.flights,
//     tableSettings: state.tableSettings
//   }
// }


const mapStateToProps = state => (

{
  flights: state.flights,
  tableSettings: state.tableSettings
})



export default connect(
  mapStateToProps,
)(FlightTable)


