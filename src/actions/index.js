export const addFlight = (flight) => ({
  type: 'ADD_FLIGHT',  
  flight: flight
})

export const changeOrderFlights = (flights) => ({
  type: 'CHANGE_ORDER_FLIGHTS',  
  flights: flights
})

export const setEditableStatus = (status) => ({
    type: 'SET_EDITABLE_STATUS',
    editableStatus: status
})
