import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { emptyCart } from '../../redux/cart/cart.actions';
import { STRIPE_PUBLISHABLE_KEY } from '../../constants';

const StripeButton = ({ price, emptyCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = STRIPE_PUBLISHABLE_KEY;

  const onToken = token => {
    console.log(token);
    emptyCart();
    alert('Success. Payment complete.')
  }

  return (
    <StripeCheckout
      label='Pay now'
      name='Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

const mapDispatchToProps = dispatch => ({
  emptyCart: () => dispatch(emptyCart())
})

export default connect(null, mapDispatchToProps)(StripeButton);