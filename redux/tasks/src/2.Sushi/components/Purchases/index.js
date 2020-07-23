import "./styles.css";

import ConnectedPurchase from "../../containers/Purchase";
import Gapped from "@skbkontur/react-ui/Gapped";
import Loader from "@skbkontur/react-ui/Loader";
import ProductTag from "../../constants/ProductTag";
import PropTypes from "prop-types";
import PurchasesTotalCost from "../PurchasesTotalCost";
import React from "react";
import Status from "../../constants/Status";

export default function Purchases({
  products,
  productsInCart,
  productsStatus,
  onDecreaseById,
  onIncreaseById,
}) {
  const getTotalCost = () => {
    return productsInCart.reduce(
      (sum, p) => (sum += products.byId[p.id].price * p.quantity),
      0
    );
  };

  return (
    <Loader
      type='big'
      active={(productsStatus && productsStatus === Status.loading) || false}>
      <div>
        <div className='purchases'>
          {productsInCart.map((p) => (
            <ConnectedPurchase
              key={p.id}
              number={p.id}
              id={p.id}
              quantity={p.quantity}
              onDecreaseById={onDecreaseById}
              onIncreaseById={onIncreaseById}
            />
          ))}
          <PurchasesTotalCost totalCost={getTotalCost()} />
        </div>
      </div>
    </Loader>
  );
}

Purchases.propTypes = {
  productsStatus: PropTypes.number,
  products: PropTypes.array,
  productsInCart: PropTypes.array,
  onDecreaseById: PropTypes.func,
  onIncreaseById: PropTypes.func,
  totalCost: PropTypes.number,
};
