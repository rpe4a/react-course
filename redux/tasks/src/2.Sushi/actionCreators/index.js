import * as actionTypes from "../actionTypes";

export const navigateTo = (page) => ({
  type: actionTypes.NAVIGATE_TO_PAGE,
  page,
});

export const loadProductsRequest = () => ({
  type: actionTypes.LOAD_PRODUCTS_REQUEST,
});

export const loadProductsSuccess = (products) => ({
  type: actionTypes.LOAD_PRODUCTS_SUCCESS,
  products,
});

export const loadByTags = () => async (dispatch, getState, api) => {
  dispatch({
    type: actionTypes.LOAD_BY_TAGS_REQUEST,
  });

  try {
    const productIds = await api.fetchProductIdsByTagsUnstable(
      getState().chosenProducts.tags
    );

    dispatch({
      type: actionTypes.LOAD_BY_TAGS_SUCCESS,
      productIds,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_BY_TAGS_FAILURE,
    });
  }
};

export const changeProductTag = (tag) => async (dispatch, _, api) => {
  dispatch({
    type: actionTypes.CHANGE_PRODUCT_TAG,
    tag,
  });

  await dispatch(loadByTags());
  await api.sendMetric("changeProductTag", "used");
};

export const addToCart = (productId) => {
  return {
    type: actionTypes.ADD_TO_CART,
    productId,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: actionTypes.REMOVE_TO_CART,
    productId,
  };
};

export const order = () => ({
  type: actionTypes.ORDER,
});
