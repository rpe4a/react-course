import { addToCart, removeFromCart } from "../actionCreators/index.js";

import Purchases from "../components/Purchases/index.js";
import { connect } from "react-redux";

const withStore = connect((state) => ({
  productsInCart: state.productsInCart,
  products: state.products,
}));

// Создание компонента
const ConnectedPurchases = withStore(Purchases);
export default ConnectedPurchases;
