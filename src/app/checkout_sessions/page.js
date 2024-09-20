"use client"

import React, { useCallback, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import axiosInstance from '../utils/axiosInstance';
const axios = require('axios');

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
//https://ecommerce-backend-rqk3.onrender.com

export default function App() {
  const [priceId, setPriceId] = useState([{price: 'price_1PxUG6KRO5k2Lh6gqXY3SSOZ', quantity: 1}])

  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    return fetch("http://localhost:8080/api/v1/booking/checkout-session/66df144bfb6717ad92a34ef2", {
      method: "GET",  
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
        
  }, []); 

  const options = {fetchClientSecret};
  console.log(options)

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