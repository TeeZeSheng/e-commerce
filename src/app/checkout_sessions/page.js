"use client"

import React, { useCallback, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
const axios = require('axios');

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function App() {
  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    return fetch("http://127.0.0.1:8080/api/v1/booking/checkout-session/price_1PwhG3KRO5k2Lh6gGhEaLOz7", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
        
  }, []);

  const options = {fetchClientSecret};
  console.log(options)

  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8080/api/v1/booking/checkout-session/price_1PwhG3KRO5k2Lh6gGhEaLOz7').then((res) => {
  //     console.log(res)
  //   })
  // }, [])
    

  return (
    <div id="checkout" className='my-12'>
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
    
  )
}