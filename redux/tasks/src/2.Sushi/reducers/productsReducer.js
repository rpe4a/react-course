import * as actionTypes from "../actionTypes";

import Status from "../constants/Status";
import { createReducer } from "redux-create-reducer";

const defaultState = {
  allIds: [],
  byId: {},
  status: Status.none,
};

const handleProductsRequest = (state) => {
  return {
    ...state,
    status: Status.loading,
  };
};

const handleProductsSuccess = (state, { products }) => {
  return {
    ...state,
    allIds: products.map((p) => p.id),
    byId: products.reduce(
      (result, product) => ({ ...result, [product.id]: product }),
      {}
    ),
    status: Status.loaded,
  };
};

export default createReducer(defaultState, {
  [actionTypes.LOAD_PRODUCTS_REQUEST]: handleProductsRequest,
  [actionTypes.LOAD_PRODUCTS_SUCCESS]: handleProductsSuccess,
});
