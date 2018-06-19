import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EditableBoardCheckBox from '../components/EditableBoardCheckBox'
import { setEditableStatus } from '../actions'


const mapStateToProps = state => ({
  tableSettings: state.tableSettings
})



function mapDispatchToProps(dispatch) {
  return {
    setEditableStatus: bindActionCreators(setEditableStatus, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditableBoardCheckBox)
