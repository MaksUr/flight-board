const initialState = [
  {
    flightNumber: 'DP-400',
    departure: '2016-09-10 23:22'
  },
  {
    flightNumber: 'DP-401',
    departure: '2017-08-10 23:21'
  },
  {
    flightNumber: 'DP-402',
    departure: '2017-08-10 23:20'
  }
]

export default function flights(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FLIGHT':
      return [
        ...state,         
        action.flight
    ]
        
    default:
      return state;
  }  
}
