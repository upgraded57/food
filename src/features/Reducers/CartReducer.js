import { ADDITEMTOCART, DELETEITEMFROMCART } from "../actions/CartActions";
const initialState = {
  cart: [],
  user: null,
  history: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITEMTOCART:
      if (!state.cart.includes(action.payload)) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      } else {
        return { ...state };
      }

    case DELETEITEMFROMCART:
      return {
        ...state,
        cart: state.cart.filter((meal) => {
          return meal.idMeal !== action.payload.idMeal;
        }),
      };
    default:
      return state;
  }
};
