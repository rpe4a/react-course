import Menu from "../components/Menu/index.js";
import Status from "../constants/Status";
import { connect } from "react-redux";

const withStore = connect((state) => ({
  productIds: getProductIds(state.products, state.chosenProducts),
  productsStatus: getProductStatus(state.products, state.chosenProducts),
}));

function getProductStatus(products, chosenProducts) {
  if (
    chosenProducts.status === Status.loading ||
    products.status === Status.loading
  ) {
    return Status.loading;
  }

  if (products.status === Status.loaded) {
    return Status.loaded;
  }

  return Status.none;
}

function getProductIds(products, chosenProducts) {
  if (chosenProducts.status === Status.loaded) {
    return chosenProducts.ids;
  }

  if (products.status === Status.loaded) {
    return products.allIds;
  }

  return [];
}

const ConnectedMenu = withStore(Menu);
export default ConnectedMenu;
