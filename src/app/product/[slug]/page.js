"use client"

import React, { useEffect } from 'react'
import { home, homeKit } from '../../utils'
import Image from 'next/image'
import axiosInstance from '@/app/utils/axiosInstance'
import { useScrollTrigger } from '@mui/material'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Product = ({params}) => {
    const lst = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [product, setProduct] = useState({})
    const [showCart, setShowCart] = useState(false)
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [fav, setFav] = useState('Add to wish list')
    const router = useRouter();

    useEffect(() => {
        axiosInstance.get(`product/getProduct/${params.slug}`).then((res) => {
            setProduct(res.data.data.product)
            res.data.data.product.color ? setColor(res.data.data.product.color[0]) : setColor('')
            res.data.data.product.size ? setSize(res.data.data.product.size[0]) : setSize('')
            
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const handleCart = () => {
        let cartItem = {
            ...product,
            size: size
        }

        axiosInstance.post('product/addToCart', cartItem).then((res) => {
            console.log(res)
            setShowCart((prev) => !prev)
            window.scrollTo(0, 0)
        }).catch((err) => {
            console.log(err)
        })
        
    }

  return (
    <div>
        <div>
        {showCart ? <div className='w-1/4 border absolute right-0 top-12 bg-white flex bg-gray-300 p-4 justify-around z-50'>
                <div>
                    <Image src={product.display_image} 
                        width={100} height={100} quality={100}/>
                </div>
                <div>
                    <h1 className='text-black'>{product.name}</h1>
                    <h1 className='text-black'>RM {product.price}</h1>
                    <h1 className='text-black'>Successfully added to cart</h1>
                    <h1 className='text-black'>Size: {size}</h1>
                    <button className='mr-4 border rounded-md py-1 px-4 hover:bg-black' onClick={() => setShowCart((prev) => !prev)}>close</button>
                    <button className='mr-4 border rounded-md py-1 px-4' onClick={() => router.push('/checkout_sessions')}>Checkout</button>
                </div>
                
            </div> : <></>}
        </div>
    <div className={`flex justify-evenly px-14 mt-10 py-10 ${showCart ? 'opacity-50' : ''}`}>
        
        
        <div className='grid grid-cols-2 gap-4'>
        <div className=''>
            <Image src={color && (product.img_url)[color]} alt={product.name}
            width={500} height={550} quality={100}/>
        </div>
        <div className='mx-6'>
            <h1 className='text-4xl'>{product.name}</h1>
                <h1 className='text-2xl mb-4'>{product.product_type}</h1>
                <h1 className='mb-4 text-md'>RM {product.price}</h1>
                <h1 className='text-xl'>Select Color</h1>
                <div className='flex my-4 space-x-4'>
                    {product.color && (product.color).map((c, i) => (
                        <div key={i} className={`   ${c === color ? 'opacity-50 pointer-events-none' : 'hover:opacity-50'}`}>
                            <div className='w-14 border h-14 rounded-full border-2  hover:cursor-pointer' style={{backgroundColor: c}} onClick={() => setColor(c)}></div>
                        </div>
                        
                    ))}
                    
                </div>
                <h1 className='my-4 text-xl'>Select Size</h1>
                <div className='flex'>
                {product.size && product.size.map((s, i) => (
                    <div className={size === s ? "opacity-50 pointer-events-none" : "hover:opacity-50w"} key={i}>
                        <button className='mr-2 border py-1 px-2 border-2 ' onClick={() => setSize(s)}>{s}</button>

                    </div>
                ))}
                </div>
                <div className='my-8'>
                    <h1 className='my-4 text-xl'>Description</h1>
                    <h1 className='text-justify text-sm'>{product.description}</h1>
                </div>
                <div >
                <button className='mt-8 rounded-md border-white border w-1/2 flex justify-evenly hover:bg-white hover:text-black' onClick={() => setFav('Added to wish list')}>{fav}</button>
                </div>
                <div className=''> 
                <button className='mt-4 rounded-md border-white border w-1/2 flex justify-evenly hover:bg-white hover:text-black' onClick={handleCart}>Add to cart</button>
                </div>
                
            </div>
        <div className='col-span-4'>
            <h1>Explore</h1>
        </div>
        <div className='overflow-hidden w-full col-span-4'>
            <div className='overflow-x-auto'>
                <div className='flex w-full'>
            {lst.map((l, i) => (
                <div className={`w-[calc(100%/5)] h-auto mr-4 shrink-0`} key={i}>
                    
                    <Image src={home} width={900} height={300} alt=''/>
                </div>
            ))}
            
            
                </div>
            </div>
        </div>
        
    </div>
    </div>
    </div>
    
    
    
  )
}

export default Product