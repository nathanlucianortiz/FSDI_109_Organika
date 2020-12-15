// reducer: a simple fn that receives state and action
// should return a new state
const cartProductReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      var copy = [...state]; // clone the state
      copy.push(action.payload);
      return copy;

    case "REMOVE_PRODUCT":
      // remove product from the cart by filtering the id
      return state.filter((pc) => pc.product.id !== action.payload.product.id);
  }

  return state;
};

export default cartProductReducer;
