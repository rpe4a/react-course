import combinedReducer from "./combinedReducer";
import crossSliceOrderReducer from "./crossSliceOrderReducer";

const rootReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);
  const finalState = crossSliceOrderReducer(intermediateState, action);
  return finalState;
};

export default rootReducer;
