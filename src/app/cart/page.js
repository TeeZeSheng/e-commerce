import Image from 'next/image'
import React from 'react'
import { homeKit } from '../utils'

const Cart = () => {
    const lst = [1, 2, 4]
  return (
    <div className='min-h-screen flex justify-evenly px-8 space-x-8 pb-12'>
        <div className='flex flex-col w-full max-w-4xl'> {/* Set width to full or a specific width */}
            <h1 className='mt-8 mb-4 text-2xl' id='cart'>Cart</h1>
            {lst.map((l, i) => (
                 <div>
                    <div className='flex w-full mt-4' id='details'>  {/* Ensure details take up full width */}
                 <div className='flex justify-between w-full'>  {/* This div now takes up full width */}
                     <div className='flex space-x-4' id='1'>
                     <div className=''>
                         <Image src={homeKit} width={300} />
                     </div>
                     <div>
                         <h1>Spurs Hoodie</h1>
                         <h1>Hoodie</h1>
                         <h1>Blue</h1>
                         <h1>L</h1>
                     </div>
                     </div>
                     <div className='' id='2'>
                     <h1>RM700</h1>
                     </div>
                 </div>
                 
             </div>
             <div className='bg-zinc-500 w-full h-0.5 my-4'/>
                 </div>
            ))}           
        </div>
        <div className='w-full max-w-64 mt-8'>
            <h1 className='text-2xl'>Summary</h1>
            <div className='flex justify-between mt-8'>
                <h1>Subtotal</h1>
                <p>RM200</p>
            </div>
            <div className='flex justify-between'>
                <h1>Delivery Fees</h1>
                <p>RM5.90</p>
            </div>
            <div className='bg-zinc-500 w-full h-0.5 my-4'/>
            <div className='flex justify-between'>
                <h1>Total</h1>
                <p>RM205.90</p>
            </div>
            <div className='bg-zinc-500 w-full h-0.5 my-4'/>
            <div>
                <button className='mt-4 py-2 rounded-md border-white border w-full flex justify-evenly hover:bg-white hover:text-black'>Checkout</button>
            </div>
        </div>
        
</div>

  )
}

export default Cart