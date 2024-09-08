import React from 'react'
import Image from 'next/image'
import homeKit from '../../../public/homekit.webp'
import styles from './scroll.module.css'
import Link from 'next/link'

const Product = () => {
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
                <h1>Hoodie</h1>
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
            <div className='flex flex-wrap ml-20 z-10 items-center justify-center'>
                {/* <Link><Image src={homeKit} width={400} className='mx-2 my-2'/></Link> */}
                <Image src={homeKit} width={500} className='mx-2 my-2'/>
                <Image src={homeKit} width={500} className='mx-2 my-2'/>
                <Image src={homeKit} width={500} className='mx-2 my-2'/>
                
                
                <Image src={homeKit} width={500} className='mx-2 my-2'/>
                <Image src={homeKit} width={500} className='mx-2 my-2'/>
                <Image src={homeKit} width={500} className='mx-2 my-2'/>
                <Image src={homeKit} width={500} className='mx-2 my-2'/>
                <Image src={homeKit} width={500} className='mx-2 my-2'/>
                <Image src={homeKit} width={500} className='mx-2 my-2'/>
                <Image src={homeKit} width={500} className='mx-2 my-2'/>
                <Image src={homeKit} width={500} className='mx-2 my-2'/>
                <Image src={homeKit} width={500} className='mx-2 my-2'/>
                <Image src={homeKit} width={500} className='mx-2 my-2'/>
            </div>
        
        </div>
    </div>
    
  )
}

export default Product