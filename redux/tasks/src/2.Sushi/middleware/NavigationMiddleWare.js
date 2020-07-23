import * as actionCreators from "../actionCreators";
import * as actionTypes from "../actionTypes";

import Page from "../constants/Page";

const NavigationMiddleWare = ({ getState, dispatch }) => (next) => (action) => {
  if (action.type !== actionTypes.NAVIGATE_TO_PAGE) return next(action);

  const { page } = getState();

  if (page === Page.menu) return next(actionCreators.navigateTo(Page.cart));

  return next(action);
};

export default NavigationMiddleWare;
