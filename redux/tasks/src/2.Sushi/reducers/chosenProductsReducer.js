import * as actionTypes from "../actionTypes";

import Status from "../constants/Status";

const defaultState = {
  tags: [],
  ids: [],
  status: Status.none,
};

export default function chosenProductsReducer(
  chosenProducts = defaultState,
  action
) {
  switch (action.type) {
    case actionTypes.CHANGE_PRODUCT_TAG:
      return changeProductTag(chosenProducts, action);
    case actionTypes.LOAD_BY_TAGS_REQUEST:
      return loadByTagsRequest(chosenProducts);
    case actionTypes.LOAD_BY_TAGS_SUCCESS:
      return loadByTagsSuccess(chosenProducts, action);
    case actionTypes.LOAD_BY_TAGS_FAILURE:
      return loadByTagsFailure(chosenProducts);
  }

  return chosenProducts;
}

function changeProductTag(state, { tag }) {
  return {
    ...state,
    tags: !state.tags.includes(tag)
      ? [...state.tags, tag]
      : state.tags.filter((t) => t !== tag),
  };
}

function loadByTagsRequest(state) {
  return {
    ...state,
    status: Status.loading,
  };
}

function loadByTagsSuccess(state, { productIds }) {
  return {
    ...state,
    ids: productIds,
    status: Status.loaded,
  };
}

function loadByTagsFailure(state) {
  return {
    ...state,
    tags: [],
    ids: [],
    status: Status.none,
  };
}
