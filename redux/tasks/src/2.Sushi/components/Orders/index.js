import "./styles.css";

import Link from "@skbkontur/react-ui/Link";
import PropTypes from "prop-types";
import Purchases from "../../components/Purchases";
import React from "react";

export default function Orders({
  products,
  orders,
  productsStatus,
  onNavigateToMenu,
}) {
  if (orders && orders.length > 0) {
    return orders.map((order, index) => (
      <Purchases
        key={index}
        productsStatus={productsStatus}
        products={products}
        productsInCart={order}
      />
    ));
  }
  return (
    <div className='ordersMessageContainer'>
      Нет заказов. Выберите что-нибудь из{" "}
      <Link onClick={onNavigateToMenu}>меню</Link>
    </div>
  );
}

Orders.propTypes = {
  orders: PropTypes.array,
  products: PropTypes.array,
  productsStatus: PropTypes.number,
  onNavigateToMenu: PropTypes.func,
};
