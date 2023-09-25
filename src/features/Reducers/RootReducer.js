import { combineReducers } from "redux";
import { cartReducer } from "./CartReducer";
import { userReducer } from "./UserReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
