import "./styles.css";

import Button from "@skbkontur/react-ui/Button";
import ConnectedPurchases from "../../containers/Purchases";
import Link from "@skbkontur/react-ui/Link";
import PropTypes from "prop-types";
import React from "react";

export default function Cart(props) {
  const {
    onOrder,
    onNavigateToMenu,
    productsStatus,
    onDecreaseById,
    onIncreaseById,
    products,
  } = props;
  if (products.length > 0) {
    return (
      <div>
        <ConnectedPurchases
          productsStatus={productsStatus}
          onDecreaseById={onDecreaseById}
          onIncreaseById={onIncreaseById}
        />
        <div className='orderButtonContainer'>
          <Button use='pay' size='large' onClick={onOrder}>
            Заказать
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className='cartMessageContainer'>
      Корзина пуста. Выберите что-нибудь из{" "}
      <Link onClick={onNavigateToMenu}>меню</Link>
    </div>
  );
}

Cart.propTypes = {
  productsStatus: PropTypes.number,
  onDecreaseById: PropTypes.func,
  onIncreaseById: PropTypes.func,
  onOrder: PropTypes.func,
  onNavigateToMenu: PropTypes.func,
  products: PropTypes.array,
};
