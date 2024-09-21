"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

// import styles from './scroll.module.css'
import Link from 'next/link'
import axiosInstance from '../../utils/axiosInstance'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Product = ({params}) => {
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])
    const [title, setTitle] = useState('All Products')
    const [catButton, setCatButton] = useState(false)
    const [loading, setLoading] = useState(true)

    const [a, setA] = useState([1, 2, 4])

    useEffect(() => {
        axiosInstance.get('product').then((res) => {
            console.log(res)
            setProducts(res.data.data.products)
            setFilterProducts(res.data.data.products)
            setLoading(false)
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
                setCatButton(false)
                setLoading(false)
                setTitle(cat)
            }).catch((err) => {
                console.log(err)
            })
        }else {
            setTitle(cat)
            setCatButton(false)
            setFilterProducts(products)
            setLoading(false)
        }
        
    }
  return (
    <div className='pb-14 lg:px-0 px-2'> 
        <div className='flex flex-col items-center mb-4 mt-2 sticky top-14 z-40 bg-black'>
            <h1>Buy 5 Free 1</h1>
            <h1>From 6/9 to 10/10</h1>
        </div> 
        <div className='sm:hidden flex justify-center w-full my-4'>
            <button onClick={() => setCatButton(!catButton)} className='flex border px-2 py-2 rounded-md hover:bg-white hover:text-black'>{title} <KeyboardArrowDownIcon /></button>
           
        </div>
        <div className={catButton ? 'overflow-y-auto flex flex-col items-center space-y-2 bg-slate-900' : 'hidden'}>
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
        {/* <div className='px-10 mb-10'>
            <h1 className='text-3xl'>{title}</h1>
        </div> */}
        <div className='flex justify-between sm:px-10'>
            <div className='hidden sm:h-full sm:sticky sm:top-24 sm:flex sm:items-center sm:justify-center sm:w-1/6 mr-12' >
            <div className=' h-full space-y-4 mt-4 w-full'  id='category'>
                <div className='overflow-y-auto flex flex-col items-start space-y-2'>
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
            {!loading ? 
            <div className='lg:flex-row lg:flex-wrap z-10 lg:px-12 w-full items-center md:flex md:flex-col'>
                { [1, 2, 3, 4, 5, 6].map((r, i) => (
                <Stack spacing={2} className='mx-8 animate-pulse my-4' key={i}>
                <Skeleton variant="rectangular" width={300} height={350} sx={{ bgcolor: 'grey.800'}} />
                <Skeleton variant="rounded" width={210} height={30} sx={{ bgcolor: 'grey.800'}}/>
                </Stack>
            ))}
            </div>
           :
               <div className='lg:flex-row lg:flex-wrap z-10 lg:px-12 w-full md:items-center md:flex md:flex-col'>
                
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
                
            </div>}
        </div>
    </div>
    
  )
}

export default Product