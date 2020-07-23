import * as actionTypes from "../actionTypes";

import Page from "../constants/Page";

export default function pageReducer(page = Page.menu, action) {
  switch (action.type) {
    case actionTypes.NAVIGATE_TO_PAGE:
      return action.page;
  }

  return page;
}
