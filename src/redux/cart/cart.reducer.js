import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  toggleDropdown: false
};

const cartDropdownReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_DROPDOWN:
      return {
        ...state,
        toggleDropdown: !state.toggleDropdown
      }

    default:
      return state;
  }
}

export default cartDropdownReducer;