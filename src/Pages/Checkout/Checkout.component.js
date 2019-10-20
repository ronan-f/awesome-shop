import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../Components/checkout-item/checkout-item.component';
import StripeButton from '../../Components/stripe-button/stripe-button.component';
import './Checkout.styles.scss';

const Checkout = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <h1>Checkout</h1>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block description'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => (
          <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
        ))
      }
      <div className='total'>TOTAL: ${total}</div>
      <StripeButton price={total} />
      <p className="alert-text">*Please use 4242 4242 4242 4242 - Exp: 01/20 - CVV: 111 for test credit card payments*</p>
    </div>
)};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);