import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

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
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      }

    default:
      return state;
  }
}

export default cartDropdownReducer;