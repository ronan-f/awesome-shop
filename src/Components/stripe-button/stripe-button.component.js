import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { STRIPE_PUBLISHABLE_KEY } from '../../constants';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = STRIPE_PUBLISHABLE_KEY;

  const onToken = token => {
    console.log(token);
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

export default StripeButton;