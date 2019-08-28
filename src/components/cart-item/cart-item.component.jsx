import React from "react";

import {
  CartItemContainer,
  CartItemImageContainer,
  ItemDetailContainer
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImageContainer src={imageUrl} alt="item" />
    <ItemDetailContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailContainer>
  </CartItemContainer>
);
export default CartItem;
