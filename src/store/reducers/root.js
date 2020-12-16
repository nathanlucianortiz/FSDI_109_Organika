import { combineReducers } from "redux";
import cartCounterReducer from "./cartCounter";
import cartProductReducer from "./cartProduct";

// Combine all the reducers into a single one
// and register that one with the store
const rootReducer = combineReducers({
  count: cartCounterReducer, // slice
  cart: cartProductReducer, // slice
});

export default rootReducer;
