import { connect } from 'react-redux'
import AddFlight from '../components/AddFlight'
import { addFlight } from '../actions'
import { bindActionCreators } from 'redux'


function mapStateToProps(state) {
  return {
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addFlight: bindActionCreators(addFlight, dispatch)
  }
}

export default connect(
    mapStateToProps,  mapDispatchToProps
)(AddFlight)
