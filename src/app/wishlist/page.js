"use client"

import React from 'react'
import { useState } from 'react'
import Footer from '../components/footer'

const WishList = () => {
    const [wishList, setWishList] = useState(["item"])
  return (
    <div>
        <div className='min-h-screen flex p-6 mt-8'>
        <div className='w-full'>
            <div className=''>
                <h1>Wish List</h1>
            </div>
            <div className='my-6 border p-4 w-3/4 max-w-full'>
                <h1>{wishList.length} items</h1>
                <h1 className='mt-4'>Your wish list has no items.</h1>
                <h1>Press the heart icon to add items to your wish list</h1>
            </div>
        </div>
    </div>
    <div className={`${wishList.length <= 2 ? "fixed bottom-0" : ""} w-full`}>
        <Footer/>
    </div>
    </div>
    
  )
}

export default WishList