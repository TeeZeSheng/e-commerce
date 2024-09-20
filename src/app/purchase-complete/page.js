"use client"

import React, { useEffect } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useRouter } from 'next/navigation';
import axiosInstance from '../utils/axiosInstance';

const Purchase = () => {
    const router = useRouter();
    useEffect(() => {
        axiosInstance.get('cart/purchaseComplete/66df144bfb6717ad92a34ef2')
    }, [])
    
  return (
    <div className='flex justify-center items-center min-h-screen w-full'>
        <div className='bg-slate-900 p-12 flex flex-col items-center w-1/2 space-y-4'>
            <CheckCircleIcon color='success' fontSize='large'/>
            <h1 className='text-2xl'>Purchase Successful </h1>
            <p>Thank you for shopping with SPURS shop</p>
            <button className='border rounded-md hover:bg-white hover:text-black p-2' onClick={() => router.push('/search/all')}>Continue browsing</button>
        </div>
    </div>
  )
}

export default Purchase