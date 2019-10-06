import React from 'react';
import { CartItemContainer, StyledImage, ItemDetailsContainer, StyledSpan } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <StyledImage src={ imageUrl } alt='item' />
    <ItemDetailsContainer>
      <StyledSpan>{ name }</StyledSpan>
      <span className='price'>
        { quantity } x ${ price }
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default CartItem;