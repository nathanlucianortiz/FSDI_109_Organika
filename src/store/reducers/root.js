const { combineReducers } = require("redux");
const { default: cartCounterReducer } = require("./cartCounter");
const { default: cartProductReducer } = require("./cartProduct");

// Combine all the reducers into a single one
// and register that one with the store
const rootReducer = combineReducers({
  count: cartCounterReducer, // slice
  cart: cartProductReducer, // slice
});

export default rootReducer;
