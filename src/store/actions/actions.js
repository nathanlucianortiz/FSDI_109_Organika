// action: an arrow fn that returns an object
// object contains type of action, payload (optional)

export const increaseCounter = () => {
  return {
    type: "INCREASE_COUNTER",
  };
};
