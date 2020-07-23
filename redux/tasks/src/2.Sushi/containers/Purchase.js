import { addToCart, removeFromCart } from "../actionCreators/index.js";

import Purchase from "../components/Purchase/index.js";
import { connect } from "react-redux";

const withStore = connect((state, props) => {
  return {
    product: state.products.byId[props.id],
    quantity: props.quantity,
    number: props.number,
  };
});

// Создание компонента
const ConnectedPurchase = withStore(Purchase);
export default ConnectedPurchase;
