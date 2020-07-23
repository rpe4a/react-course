import { connect } from "react-redux";
import Navigator from "../components/Navigation/index.js";
import { navigateTo } from "../actionCreators/index";

const withStore = connect(
  (state) => ({
    page: state.page,
  }),
  (dispatch) => ({
    onNavigate: (value) => dispatch(navigateTo(value)),
  })
);

// Создание компонента
const ConnectedNavigator = withStore(Navigator);
export default ConnectedNavigator;
