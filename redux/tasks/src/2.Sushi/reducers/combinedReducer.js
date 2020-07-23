import * as actionTypes from "../actionTypes";

import { addToCart } from "../actionCreators";
import chosenProducts from "./chosenProductsReducer";
import { combineReducers } from "redux";
import orders from "./ordersReducer";
import page from "./pageReducer";
import products from "./productsReducer";
import productsInCart from "./cartReducer";

export default combineReducers({
  page,
  products,
  chosenProducts,
  productsInCart,
  orders,
});

const handleOrderClick = (state, action) => {
  console.log(state);
  return state;
};

const crossSliceReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ORDER:
      return handleOrderClick(state, action);
  }

  return state;
};

