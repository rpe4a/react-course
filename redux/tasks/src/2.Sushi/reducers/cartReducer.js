import * as actionTypes from "../actionTypes";

import { NewWindow } from "@skbkontur/react-icons";
import { addToCart } from "../actionCreators/index";

const defaultState = [];

export default function pageReducer(products = defaultState, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return handleAddToCartProduct(products, action);
    case actionTypes.REMOVE_TO_CART:
      return handleRemoveFromCartProduct(products, action);
  }

  return products;
}

const handleAddToCartProduct = (products, { productId }) => {
  if (products.some((p) => p.id == productId))
    return products.map((p) => {
      return p.id === productId ? { ...p, quantity: p.quantity + 1 } : p;
    });

  return [...products, { id: productId, quantity: 1 }];
};
const handleRemoveFromCartProduct = (products, { productId }) => {
  const newProducts = [];

  products.forEach((product) => {
    if (product.id !== productId) newProducts.push(product);
    else if (product.quantity > 0)
      newProducts.push({ ...product, quantity: product.quantity - 1 });
    else newProducts.push({ ...product, quantity: 0 });
  });

  return newProducts;
};
