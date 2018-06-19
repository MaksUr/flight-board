const initialState = {
  editableStatus: false
}

export default function tableSettings(state = initialState, action) {

  switch (action.type) {

    case 'SET_EDITABLE_STATUS':

      return {
        editableStatus: action.editableStatus
      }

    default:
      return state;
      }
}
