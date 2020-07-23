import MenuFilter from "../components/MenuFilter/index.js";
import { changeProductTag } from "../actionCreators/index";
import { connect } from "react-redux";

const withStore = connect(
  (state) => ({
    chosenTags: state.chosenProducts.tags,
  }),
  (dispatch) => ({
    onChange: (tag) => dispatch(changeProductTag(tag)),
  })
);

// Создание компонента
const ConnectedMenuFilter = withStore(MenuFilter);
export default ConnectedMenuFilter;
