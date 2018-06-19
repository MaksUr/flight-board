export const addFlight = (flight) => ({
  type: 'ADD_FLIGHT',  
  flight: flight
})

export const setEditableStatus = (status) => ({
    type: 'SET_EDITABLE_STATUS',
    editableStatus: status
})
