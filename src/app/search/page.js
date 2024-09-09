"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import homeKit from '../../../public/homekit.webp'
import styles from './scroll.module.css'
import Link from 'next/link'
import axiosInstance from '../utils/axiosInstance'

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axiosInstance.get('product').then((res) => {
            console.log(res)
            setProducts(res.data.data.products)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const handleCategory = (cat) => {
        axiosInstance.get(`product?product_type=${cat}`).then((res) => {
            console.log(res)
            setProducts(res.data.data.products)
        }).catch((err) => {
            console.log(err)
        })
    }
  return (
    <div className='pb-14'> 
        <div className='flex flex-col items-center mb-4 mt-2 sticky top-14 z-40 bg-black'>
            <h1>Buy 5 Free 1</h1>
            <h1>From 6/9 to 10/10</h1>
        </div>  
        <div className='flex justify-between px-10'>
            <div className='h-full sticky top-28 flex items-center justify-center' >
            <div className='overflow-auto h-full space-y-4 mt-4' id='category'>
                <h1 className='text-2xl'>Category</h1>
                <button onClick={() => handleCategory("Hoodie")}>Hoodie</button>
                <h1>Apparels</h1>
                <h1>Shorts</h1>
                <h1>Sweatpants</h1>
                <h1>Category</h1>
                <h1>Hoodie</h1>
                <h1>Apparels</h1>
                <h1>Shorts</h1>
                <h1>Sweatpants</h1>
                
            </div>
            </div>
            <div className='bg-zinc-500 w-0.5 max-h-full ml-10 opacity-45'/>
            <div className='flex flex-wrap ml-20 z-10 pl-12 w-full'>
                {/* <Link><Image src={homeKit} width={400} className='mx-2 my-2'/></Link> */}
                {/* <Image src={'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQDp0PJZhNd_rR6M8pk_I2JxxBeuVlwEgu4DXSrupeqhwDsILfnuRZghKywCFrILEePr--lXTQ837VFyHUHPtwyBZM4Fi7JjUG8EWcBBzFlIiVU69nnsly-Jg'} width={350} height={350} className='mx-2 my-2'/>
                <Image src={'https://m.media-amazon.com/images/I/B1Wsm-8LxOS._AC_CLa%7C2140%2C2000%7CB1OlzrUAwDS.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0._UL1500_.png'} width={350} height={350} className='mx-2 my-2'/>
                <Image src={'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQDp0PJZhNd_rR6M8pk_I2JxxBeuVlwEgu4DXSrupeqhwDsILfnuRZghKywCFrILEePr--lXTQ837VFyHUHPtwyBZM4Fi7JjUG8EWcBBzFlIiVU69nnsly-Jg'} width={350} height={350} className='mx-2 my-2'/>
                <Image src={'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQDp0PJZhNd_rR6M8pk_I2JxxBeuVlwEgu4DXSrupeqhwDsILfnuRZghKywCFrILEePr--lXTQ837VFyHUHPtwyBZM4Fi7JjUG8EWcBBzFlIiVU69nnsly-Jg'} width={350} height={350} className='mx-2 my-2'/>
                <Image src={'https://m.media-amazon.com/images/I/B1Wsm-8LxOS._AC_CLa%7C2140%2C2000%7CB1OlzrUAwDS.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0._UL1500_.png'} width={350} height={350} className='mx-2 my-2'/> */}
               {products && products.map((product, i) =>(
                <div className='mx-2 p-4' key={i}>
                    
                    <Link href={`/product/${product._id}`}>
                    <Image src={product.display_image} width={300} height={200} className='my-2 object-cover'/>
                    
                    
                    <h1>{product.name}</h1>
                    <h1>{product.type}</h1>
                    <p>RM {product.price}</p>
                    </Link>
                    
                </div>
                ))}
                
            </div>
        
        </div>
    </div>
    
  )
}

export default Product