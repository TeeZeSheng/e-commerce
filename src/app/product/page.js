import React from 'react'
import { home, homeKit } from '../utils'
import Image from 'next/image'

const Product = () => {
    const lst = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='flex justify-evenly px-10 mt-10'>
        <div className='grid grid-cols-2 gap-4'>
        <div className=''>
            <Image src={homeKit} width={750} quality={100}/>
        </div>
        <div className='mx-10'>
            <h1 className='text-3xl'>Spurs Hoodie</h1>
                <h1 className='text-2xl mb-4'>Hoodie</h1>
                <h1 className='mb-4 text-md'>RM200</h1>
                <div className='flex'>
                    <p className='mr-2'>s</p>
                    <p className='mr-2'>s</p>
                    <p className='mr-2'>s</p>
                    <p className='mr-2'>s</p>
                </div>
                <div className='flex'>
                    <p className='mr-2'>s</p>
                    <p className='mr-2'>s</p>
                    <p className='mr-2'>s</p>
                    <p className='mr-2'>s</p>
                </div>
                
                <div >
                <button className='mt-8 rounded-md border-white border w-1/2 flex justify-evenly'>Add to favourtie</button>
                </div>
                <div className=''> 
                <button className='mt-4 rounded-md border-white border w-1/2 flex justify-evenly'>Add to cart</button>
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