import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./Reducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { addItemToCart } from "./actions/CartActions";

export const store = createStore(
  cartReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
