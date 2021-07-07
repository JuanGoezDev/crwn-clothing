import React from "react";
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  console.log(name, quantity);
  
  return (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
)};

export default CartItem;
