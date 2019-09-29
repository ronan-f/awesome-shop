import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  toggleDropdown: false,
  cartItems: []
};

const cartDropdownReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_DROPDOWN:
      return {
        ...state,
        toggleDropdown: !state.toggleDropdown
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };

    default:
      return state;
  }
}

export default cartDropdownReducer;