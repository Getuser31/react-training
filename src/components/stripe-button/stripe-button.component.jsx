import React from "react";
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IaP1gDEL51d1PXiNER6oYJziMuJEQz3CsRhm8bPecEjDWaObk9HYOYKiM3sGOL5nAuhIiiFyT9CyBhb19uNkUxK00ivHnfHWd';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Test React'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/en/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripekey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;