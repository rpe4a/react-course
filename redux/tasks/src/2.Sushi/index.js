import "regenerator-runtime/runtime";
import "./styles.css";

import { applyMiddleware, compose, createStore } from "redux";
import { loadProductsRequest, loadProductsSuccess } from "./actionCreators";

import Api from "./api";
import ConnectedNavigator from "./containers/Navigation";
import ConnectedPages from "./containers/Pages";
import ErrorBoundary from "./components/ErrorBoundary";
import NavigationMiddleWare from "./middleware/NavigationMiddleWare";
import { Provider } from "react-redux";
import React from "react";
import ReactDom from "react-dom";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const api = new Api({ baseUrl: "http://sampleserviceurl?foo=bar" });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(api), NavigationMiddleWare, logger))
);

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadProductsRequest());

    api.fetchProducts().then((products) => {
      store.dispatch(loadProductsSuccess(products));
    });
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <header className="header">
            <h1>Sushi &amp; Rolls</h1>
            <ConnectedNavigator />
          </header>
          <ConnectedPages />
        </ErrorBoundary>
      </div>
    );
  }
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
