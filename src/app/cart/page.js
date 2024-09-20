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

    const handleQuantity = (cartItem, operator) => {
        console.log('button')
        let newCartItem = {
            ...cartItem,
            operator: operator,
            id: "66df144bfb6717ad92a34ef2"
        }

        axiosInstance.post("cart/updateQuantity", newCartItem).then((res) => {
            console.log(res.data)
            setCartItems(res.data.cart[0].cart)
            setTotalPrice(res.data.cart[0].total_price)
        }).catch((err) => {
            console.log(err)
        })

    }

  return (
    <div className='min-h-screen flex justify-evenly px-8 space-x-8 pb-12 sm:mx-8'>
        
        <div className='flex flex-col w-full max-w-3xl'> {/* Set width to full or a specific width */}
            <div className='lg:hidden py-4 flex flex-col'>
                {/* <div className='flex flex-col space-x-12 '>
                    <h1 className='md:text-2xl text-md'>Summary</h1>
                    <p>RM {(totalPrice + 5.99).toFixed(2)}</p>     
                    <div>
                        <button className='text-xs sm:text-base mt-4 py-2 rounded-md border-white border w-fit md:px-12 px-3 flex justify-evenly hover:bg-white hover:text-black' onClick={() => router.push('/checkout_sessions')}>Checkout</button>
                    </div>
                </div> */}
                <div>
                    <h1 className='md:text-2xl text-md'>Summary</h1>
                    <p>RM {(totalPrice + 5.99).toFixed(2)}</p>  
                    <div>
                        <button className='mt-4 py-2 rounded-md border-white border sm:w-full w-40 md:px-12 px-4 flex justify-evenly hover:bg-white hover:text-black' onClick={() => router.push('/checkout_sessions')}>Checkout</button>
                    </div>
                </div>
                <div className=''>
                    <h1 className='md:text-2xl text-md'>Delivery Options</h1>
                    <div>
                        <button className='mt-4 py-2 rounded-md border-white border sm:w-full w-40 md:px-12 px-4 flex justify-evenly hover:bg-white hover:text-black'
                        onClick={() => setDeliver((prev) => !prev)}>Self-pickup</button>
                    </div>
                    <div>
                        <button className='mt-4 py-2 rounded-md border-white border sm:w-full w-40 md:px-12 px-4 flex justify-evenly hover:bg-white hover:text-black'
                        onClick={() => setDeliver((prev) => !prev)}>Delivery</button>
                    </div>
                </div>
            </div>
            <h1 className='mt-8 mb-4 text-2xl' id='cart'>Cart</h1>
            {cartItems.length === 0 ? 
            <div className='bg-slate-900 p-4 flex items-center flex-col space-y-4'>
                <h1>No items in cart</h1>
                <button className='border rounded-md p-2 text-sm hover:bg-white hover:text-black' onClick={() => router.push('/search')}>Shop now</button>
            </div> : <div className=''>
                {cartItems.map((cartItem, i) => (
                 <div key={i}>
                    <div className='flex w-full mt-4' id='details'>  {/* Ensure details take up full width */}
                        <div className='flex flex-col md:flex-row justify-between w-full'>  {/* This div now takes up full width */}
                            <div className='flex flex-col md:flex-row md:space-x-4' id='1'>
                            <div className='w-fit'>
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
                            <h1>Quantity</h1>
                            <div className='flex border w-fit mt-4'>
                                <button className='border-r md:px-4 px-2' onClick={() => {
                                    handleQuantity(cartItem, -1 )
                                }}>-</button>
                                <h1 className='px-4'>{cartItem.count}</h1>
                                <button className='border-l md:px-4 px-2' onClick={() => {
                                    handleQuantity(cartItem, 1)
                                }}>+</button>
                            </div>
                            
                            </div>
                        </div>
                        
                    </div>
                    <div className='bg-zinc-500 w-full h-0.5 my-4'/>
                 </div>
            ))}        
                </div>}
               
        </div>
        <div className='hidden lg:w-1/4 lg:flex lg:flex-col lg:sticky lg:top-10 lg:h-full'>
            <div className='mt-8'>
                <h1 className='md:text-2xl text-md'>Summary</h1>
                <div className='flex flex-col md:flex-row md:justify-between mt-8 w-full'>
                    <h1>Subtotal</h1>
                    <div className='flex justify-between w-1/4'>
                        <p>RM</p>
                        <p>{totalPrice.toFixed(2)}</p>
                    </div>
                    
                </div>
                <div className='flex flex-col md:flex-row md:justify-between w-full'>
                    <h1>Delivery Fees</h1>
                    <div className='flex justify-between w-1/4'>
                        <p>RM</p>
                        <p>{(deliver ? 5.99 : 0).toFixed(2)}</p>
                    </div>
                    
                </div>
                <div className='bg-zinc-500 w-full h-0.5 my-4'/>
                <div className='flex flex-col md:flex-row md:justify-between md:w-full'>
                    <h1>Total</h1>
                    <div className='flex justify-between w-1/4'>
                        <p>RM</p>
                        <p>{(totalPrice + 5.99).toFixed(2)}</p>
                    </div>
                </div>
                <div className='bg-zinc-500 w-full h-0.5 my-4'/>
                <div>
                    <button className='text-xs md:text-base mt-4 py-2 rounded-md border-white border w-full flex justify-evenly hover:bg-white hover:text-black' onClick={() => router.push('/checkout_sessions')}>Checkout</button>
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