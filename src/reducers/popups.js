import * as types from '../constants/actiontypes';

function popups(state = [], action) {
  switch (action.type) {

    case types.OPEN_POPUP:
      return state.map(popup =>
        popup.title === action.title ?
          { ...popup, isOpen: true, isSelected: true } :
          { ...popup, isSelected: false }
      )

    case types.CLOSE_POPUP:
      return state.map(popup =>
        popup.title === action.title ?
          { ...popup, isOpen: false } :
          popup
      )

    default:
      return state;
    }
}

export default popups;