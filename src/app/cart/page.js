"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { homeKit } from '../utils'
import axiosInstance from '../utils/axiosInstance'
import { useRouter } from 'next/navigation'

const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [deliver, setDeliver] = useState(true)
    const lst = [1, 2, 4]
    const router = useRouter();

    useEffect(() => {
        axiosInstance.post('cart/getCartItem', {id: "66df144bfb6717ad92a34ef2"}).then((res) => {
            console.log(res.data.cart)
            setCartItems(res.data.cart[0].cart)
            setTotalPrice(res.data.cart[0].total_price)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

  return (
    <div className='min-h-screen flex justify-evenly px-8 space-x-8 pb-12'>
        <div className='flex flex-col w-full max-w-3xl'> {/* Set width to full or a specific width */}
            <h1 className='mt-8 mb-4 text-2xl' id='cart'>Cart</h1>
            {cartItems.map((cartItem, i) => (
                 <div key={i}>
                    <div className='flex w-full mt-4' id='details'>  {/* Ensure details take up full width */}
                        <div className='flex justify-between w-full'>  {/* This div now takes up full width */}
                            <div className='flex space-x-4' id='1'>
                            <div className=''>
                                <Image src={cartItem.display_image} width={250} height={250}/>
                            </div>
                            <div>
                                <h1>{cartItem.name}</h1>
                                <h1>{cartItem.product_type}</h1>
                                {/* <h1>{Blue}</h1> */}
                                <h1>{cartItem.size}</h1>
                            </div>
                            </div>
                            <div className='' id='2'>
                            <h1>RM {cartItem.price}</h1>
                            <h1>Quantity: {cartItem.count}</h1>
                            </div>
                        </div>
                        
                    </div>
                    <div className='bg-zinc-500 w-full h-0.5 my-4'/>
                 </div>
            ))}           
        </div>
        <div className='w-1/4 flex flex-col sticky top-10 h-full'>
            <div className='mt-8'>
                <h1 className='text-2xl'>Summary</h1>
                <div className='flex justify-between mt-8 w-full'>
                    <h1>Subtotal</h1>
                    <div className='flex justify-between w-1/4'>
                        <p>RM</p>
                        <p>{totalPrice.toFixed(2)}</p>
                    </div>
                    
                </div>
                <div className='flex justify-between w-full'>
                    <h1>Delivery Fees</h1>
                    <div className='flex justify-between w-1/4'>
                        <p>RM</p>
                        <p>{(deliver ? 5.99 : 0).toFixed(2)}</p>
                    </div>
                    
                </div>
                <div className='bg-zinc-500 w-full h-0.5 my-4'/>
                <div className='flex justify-between w-full'>
                    <h1>Total</h1>
                    <div className='flex justify-between w-1/4'>
                        <p>RM</p>
                        <p>{(totalPrice + 5.90).toFixed(2)}</p>
                    </div>
                </div>
                <div className='bg-zinc-500 w-full h-0.5 my-4'/>
                <div>
                    <button className='mt-4 py-2 rounded-md border-white border w-full flex justify-evenly hover:bg-white hover:text-black' onClick={() => router.push('/checkout_sessions')}>Checkout</button>
                </div>
            </div>
            <div className='bg-zinc-500 w-full h-0.5 my-12 opacity-50'/>
            <div className=''>
                <h1 className='text-2xl'>Delivery Options</h1>
                <div>
                    <button className='mt-4 py-2 rounded-md border-white border w-full flex justify-evenly hover:bg-white hover:text-black'
                    onClick={() => setDeliver((prev) => !prev)}>Self-pickup</button>
                </div>
                <div>
                    <button className='mt-4 py-2 rounded-md border-white border w-full flex justify-evenly hover:bg-white hover:text-black'
                    onClick={() => setDeliver((prev) => !prev)}>Delivery</button>
                </div>
            </div>
        </div>
        
</div>

  )
}

export default Cart