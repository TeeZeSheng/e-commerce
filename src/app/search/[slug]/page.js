"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

// import styles from './scroll.module.css'
import Link from 'next/link'
import axiosInstance from '../../utils/axiosInstance'

const Product = ({params}) => {
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])
    const [title, setTitle] = useState('All Products')
    useEffect(() => {
        axiosInstance.get('product').then((res) => {
            console.log(res)
            setProducts(res.data.data.products)
            setFilterProducts(res.data.data.products)
            if (params.slug !== 'all') {
                handleCategory(params.slug)
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const handleCategory = (cat) => {
        if (cat !== "All Products") {
            axiosInstance.get(`product?product_type=${cat}`).then((res) => {
                console.log(res)
                setFilterProducts(res.data.data.products)
                setTitle(cat)
            }).catch((err) => {
                console.log(err)
            })
        }else {
            setTitle(cat)
            setFilterProducts(products)
        }
        
    }
  return (
    <div className='pb-14'> 
        <div className='flex flex-col items-center mb-4 mt-2 sticky top-14 z-40 bg-black'>
            <h1>Buy 5 Free 1</h1>
            <h1>From 6/9 to 10/10</h1>
        </div> 
        {/* <div className='px-10 mb-10'>
            <h1 className='text-3xl'>{title}</h1>
        </div> */}
        <div className='flex justify-between px-10'>
            <div className='h-full sticky top-28 flex items-center justify-center w-1/6' >
            <div className='overflow-auto h-full space-y-4 mt-4 w-full'  id='category'>
                <div className='flex flex-col items-start space-y-2'>
                <h1 className='text-3xl p-2'>{title}</h1>
                <button onClick={() => handleCategory("All Products")} className='hover:bg-gray-700 rounded-md p-2'><h1>All Products</h1></button>
                <button onClick={() => handleCategory("Hoodie")} className='hover:bg-gray-700 rounded-md p-2'><h1>Hoodie</h1></button>
                <button onClick={() => handleCategory("Shirt")} className='hover:bg-gray-700 rounded-md p-2'><h1>Shirt</h1></button>
                <button onClick={() => handleCategory("Accessories")} className='hover:bg-gray-700 rounded-md p-2'>Accessories</button>
                <button onClick={() => handleCategory("Shorts")} className='hover:bg-gray-700 rounded-md p-2'>Shorts</button>
                <button onClick={() => handleCategory("Joggers")} className='hover:bg-gray-700 rounded-md p-2'>Joggers</button>
                <button onClick={() => handleCategory("Sweatshirt")} className='hover:bg-gray-700 rounded-md p-2'>Sweatshirt</button>
                <button onClick={() => handleCategory("Mug")} className='hover:bg-gray-700 rounded-md p-2'>Glassware</button>
                <button onClick={() => handleCategory("Beanie")} className='hover:bg-gray-700 rounded-md p-2'>Beanies & Caps</button>
                </div>
                
            </div>
            </div>
            <div className='bg-zinc-500 w-0.5 max-h-full ml-10 opacity-45'/>

            
            <div className='flex flex-wrap ml-20 z-10 pl-12 w-full'>
                
               {filterProducts && filterProducts.map((product, i) =>(
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