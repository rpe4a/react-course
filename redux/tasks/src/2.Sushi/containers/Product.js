import { addToCart, navigateTo, removeFromCart } from "../actionCreators/index.js";

import Page from "../constants/Page.js";
import Product from "../components/Product/index.js";
import { connect } from "react-redux";

const withStore = connect(
  (state, props) => {
    const hasProduct = state.productsInCart.find((p) => p.id == props.productId);

    return {
      product: state.products.byId[props.productId],
      quantity: hasProduct && hasProduct.quantity || 0,
    };
  },
  (dispatch) => ({
    onIncrease: (productId) => dispatch(addToCart(productId)),
    onDecrease: (productId) => dispatch(removeFromCart(productId)),
    onPay:() => dispatch(navigateTo(Page.cart))
  })
);

// Создание компонента
const ConnectedProduct = withStore(Product);
export default ConnectedProduct;
