import { addToCart, removeFromCart } from "../actionCreators/index";

import Cart from "../components/Cart/index.js";
import { connect } from "react-redux";
import { order } from "../actionCreators/index";

const withStore = connect(
  (state) => ({
    products: state.productsInCart,
  }),
  (dispatch) => ({
    onOrder: () => dispatch(order()),
    onIncreaseById: (productId) => dispatch(addToCart(productId)),
    onDecreaseById: (productId) => dispatch(removeFromCart(productId)),
  })
);

// Создание компонента
const ConnectedCart = withStore(Cart);
export default ConnectedCart;
