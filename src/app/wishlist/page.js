"use client"

import React, { useEffect } from 'react'
import { useState } from 'react'
import Footer from '../components/footer'
import axiosInstance from '../utils/axiosInstance'
import Image from 'next/image'
import DeleteIcon from '@mui/icons-material/Delete';

const WishList = () => {
    const [wishList, setWishList] = useState([])

    useEffect(() => {
        axiosInstance.get('wishlist/getWishList/66df144bfb6717ad92a34ef2').then((res) => {
            setWishList(res.data.wishList)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
  return (
    <div div className='w-full'>
        {/* <div className='min-h-screen flex p-6 justify-center items-center w-full'> */}
        <div className='min-h-screen flex flex-col p-6 items-center w-full'>
            <div className='w-3/4 px-4'>
                <h1 className='text-3xl'>Wish List</h1>
            </div>
            <div className='p-4 w-3/4 max-w-full'>
                {wishList.length === 0 ? 
                <div className='border p-4'>
                    <div>
                    <h1 className=''>Your wish list has no items.</h1>
                    <h1>Press the heart icon to add items to your wish list</h1>
                </div>
                </div>
                 : 
                <div className='w-full'>
                    {wishList.map((w, i) => (
                        <div className='flex justify-between border p-4 my-4 bg-slate-900' key={i} >
                            <div className='flex space-x-8'>
                                <Image src={w.display_image} width={200} height={200} alt={w.name}/>
                                <div>
                                    <h1 className='text-2xl mb-4'>{w.name + ' (' + w.color + ')'}</h1>
                                    <h1>{w.product_type}</h1>
                                    <h1>RM {w.price}</h1>
                                    <button className='border rounded-lg p-2 my-4 hover:bg-white hover:text-black'>Add to cart</button>
                                </div>
                            </div>
                            <DeleteIcon className='hover:opacity-50 cursor-pointer'/>
                        </div>
                    ))}
                    
                </div>}
                
            </div>
        {/* </div> */}
    </div>
    <div className={`${wishList.length <= 1 ? "fixed bottom-0" : ""} w-full`}>
    {wishList.length <= 1 ? <Footer/> : <></>}
        
    </div>
    </div>
    
  )
}

export default WishList