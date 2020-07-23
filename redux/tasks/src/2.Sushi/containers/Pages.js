import { connect } from "react-redux";
import Pages from "../components/Pages/index.js";

const withStore = connect((state) => ({
  page: state.page,
}));

// Создание компонента
const ConnectedPages = withStore(Pages);
export default ConnectedPages;
