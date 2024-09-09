"use client"

import React, { useEffect } from 'react'
import { home, homeKit } from '../../utils'
import Image from 'next/image'
import axiosInstance from '@/app/utils/axiosInstance'
import { useScrollTrigger } from '@mui/material'
import { useState } from 'react'

const Product = ({params}) => {
    const lst = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [product, setProduct] = useState({})

    useEffect(() => {
        axiosInstance.get(`product/${params.slug}`).then((res) => {
            setProduct(res.data.data.product)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

  return (
    <div className='flex justify-evenly px-14 mt-10 py-10'>
        <div className='grid grid-cols-2 gap-4'>
        <div className=''>
            <Image src={product.display_image} 
            width={500} height={550} quality={100}/>
        </div>
        <div className='mx-6'>
            <h1 className='text-4xl'>{product.name}</h1>
                <h1 className='text-2xl mb-4'>{product.product_type}</h1>
                <h1 className='mb-4 text-md'>RM {product.price}</h1>
                <h1 className='text-xl'>Select Color</h1>
                <div className='flex my-4 space-x-4'>
                    {product.color && product.color.map((c, i) => (
                        <div className={`w-14 border h-14 rounded-full ${c} border-4 hover:opacity-50 hover:cursor-pointer`}></div>
                    ))}
                    
                </div>
                <h1 className='my-4 text-xl'>Select Size</h1>
                <div className='flex'>
                {product.size && product.size.map((s, i) => (
                    <div className='' id={i}>
                        <p className='mr-2 border py-1 px-2 border-2 hover:opacity-50'>{s}</p>

                    </div>
                ))}
                </div>
                <div className='my-8'>
                    <h1 className='my-4 text-xl'>Description</h1>
                    <h1 className='text-justify text-sm'>{product.description}</h1>
                </div>
                <div >
                <button className='mt-8 rounded-md border-white border w-1/2 flex justify-evenly hover:bg-white hover:text-black'>Add to favourtie</button>
                </div>
                <div className=''> 
                <button className='mt-4 rounded-md border-white border w-1/2 flex justify-evenly hover:bg-white hover:text-black'>Add to cart</button>
                </div>
                
            </div>
        <div className='col-span-4'>
            <h1>Explore</h1>
        </div>
        <div className='overflow-hidden w-full col-span-4'>
            <div className='overflow-x-auto'>
                <div className='flex w-full'>
            {lst.map((l, i) => (
                <div className={`w-[calc(100%/5)] h-auto mr-4 shrink-0`}>
                    
                    <Image src={home} width={900} height={300}/>
                </div>
            ))}
            
            
                </div>
            </div>
        </div>
        
    </div>
    </div>
    
    
  )
}

export default Product