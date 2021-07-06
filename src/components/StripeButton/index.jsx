import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JAHfGI73xtM7eB7j5SPEksyQWF892dKu9pJZzi2Ww6JEYYQDRsQB4RDqK6bBfVAiA8yb2vVkHeyMimUMAmxC2lS00UjHKmPti";

  const onToken = token => {
    console.log(token);
    alert('Payment successful')
  }  

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
