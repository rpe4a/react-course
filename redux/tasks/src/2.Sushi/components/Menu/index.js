import "./styles.css";

import ConnectedMenuFilter from "../../containers/MenuFilter";
import ConnectedProduct from "../../containers/Product";
import Loader from "@skbkontur/react-ui/Loader";
import ProductTag from "../../constants/ProductTag";
import PropTypes from "prop-types";
import React from "react";
import Status from "../../constants/Status";

export default function Menu({ productsStatus, productIds }) {
  return (
    <Loader
      type='big'
      active={(productsStatus && productsStatus === Status.loading) || false}>
      <main className='menu'>
        <ConnectedMenuFilter />
        <div className='menuTableWrapper'>
          <div className='menuTable'>
            {productIds.map((pid) => (
              <ConnectedProduct key={pid} productId={pid} />
            ))}
          </div>
        </div>
        <ConnectedMenuFilter />
      </main>
    </Loader>
  );
}

Menu.propTypes = {
  productsStatus: PropTypes.number,
  productIds: PropTypes.array.isRequired,
};
