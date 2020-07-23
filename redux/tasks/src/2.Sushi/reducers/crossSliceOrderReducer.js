import * as actionTypes from "../actionTypes";

import Page from "../constants/Page";

const handleOrderClick = (state, action) => {
  return {
    ...state,
    orders: [...state.orders, state.productsInCart],
    page: Page.orders,
    productsInCart: [],
  };
};

export default (state, action) => {
  switch (action.type) {
    case actionTypes.ORDER:
      return handleOrderClick(state, action);
  }

  return state;
};
