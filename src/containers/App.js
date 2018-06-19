import React, { Component } from 'react'
import { connect } from 'react-redux'
import VisibleFlightTable from '../containers/VisibleFlightTable'
import AddFlight from '../containers/AddFlight'
import EditableBoardCheckBox from '../containers/EditableBoardCheckBox'




class App extends Component {
  render() {    
    return (
      <div>
        <VisibleFlightTable />
        <EditableBoardCheckBox />
        <AddFlight />
      </div>
    )
  }
}



export default connect()(App);
