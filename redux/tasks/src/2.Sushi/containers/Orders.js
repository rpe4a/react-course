import Orders from "../components/Orders/index.js";
import { connect } from "react-redux";
import { order } from "../actionCreators/index";

const withStore = connect(
  (state) => ({
    orders: state.orders,
    products: state.products,
  }),
  (dispatch) => ({})
);

// Создание компонента
const ConnectedOrders = withStore(Orders);
export default ConnectedOrders;
