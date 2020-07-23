import ConnectOrders from "../../containers/Orders";
import ConnectedCart from "../../containers/Cart";
import ConnectedMenu from "../../containers/Menu";
import Page from "../../constants/Page";
import PropTypes from "prop-types";
import React from "react";

export default function Pages({ page }) {
  switch (page) {
    case Page.menu:
      return <ConnectedMenu />;
    case Page.cart:
      return <ConnectedCart />;
    case Page.orders:
      return <ConnectOrders />;
    default:
      throw "Unknown page";
  }
}

Pages.propTypes = {
  page: PropTypes.string.isRequired,
};
