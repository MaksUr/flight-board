import { combineReducers } from 'redux'
import flights from './flights'
import tableSettings from './tableSettings'


export default combineReducers({
  flights,
  tableSettings
})