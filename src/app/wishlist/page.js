"use client"

import React, { useEffect } from 'react'
import { useState } from 'react'
import Footer from '../components/footer'
import axiosInstance from '../utils/axiosInstance'
import Image from 'next/image'
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/navigation'

const WishList = () => {
    const [wishList, setWishList] = useState([])
    const router = useRouter();
    useEffect(() => {
        axiosInstance.get('wishlist/getWishList/66df144bfb6717ad92a34ef2').then((res) => {
            setWishList(res.data.wishList)
        }).catch((err) => {
            console.log(err)
        })
        
    }, [])

    const handleDelete = (color, name) => {
        axiosInstance.post('wishlist/deleteWishlist/66df144bfb6717ad92a34ef2', {
            color: color,
            name: name
        }).then((res) => {
            setWishList(res.data.wishList)
        })

    }
  return (
    <div div className='w-full'>
        {/* <div className='min-h-screen flex p-6 justify-center items-center w-full'> */}
        <div className='min-h-screen flex flex-col sm:p-6 py-4 items-center sm:w-full'>
            <div className='w-3/4 px-4'>
                <h1 className='text-3xl'>Wish List</h1>
            </div>
            <div className='p-4 w-3/4 max-w-full'>
                {wishList.length === 0 ? 
                <div className='bg-slate-900 p-4'>
                    <div>
                    <h1 className=''>Your wish list has no items.</h1>
                    <h1>Press the heart icon to add items to your wish list</h1>
                </div>
                </div>
                 : 
                <div className='w-full'>
                    {wishList.map((w, i) => (
                        <div className='flex sm:flex-row sm:justify-between sm:p-4 sm:my-4 bg-slate-900 flex-col sm:space-x-8 sm:items-center space-y-4 my-6 py-4 px-6' key={i} >
                            <div className='flex'>
                                <Image src={w.display_image} width={200} height={200} alt={w.name}/>
                            </div>
                            <div>
                                    <h1 className='sm:text-2xl text-xl mb-4'>{w.name + ' (' + w.color + ')'}</h1>
                                    <h1>{w.product_type}</h1>
                                    <h1>RM {w.price}</h1>
                                    <button className='border rounded-lg p-2 my-4 hover:bg-white hover:text-black' onClick={() => router.push('/product/66defebc095a116b5fe5ab79')}>View Product</button>
                                    
                            </div>
                            <DeleteIcon className='hover:opacity-50 cursor-pointer md:block ' onClick={() => handleDelete(w.color, w.name)}/>
                        </div>
                    ))}
                    
                </div>}
                
            </div>
        {/* </div> */}
    </div>
    </div>
    
    
  )
}

export default WishList