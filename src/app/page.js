"use client";
import Image from "next/image";
import spurs from "../../public/spurs.jpg"
import homeKit from "../../public/homekit.webp"
import { home } from "./utils";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { useEffect } from "react";
import axiosInstance from "./utils/axiosInstance";

export default function Home() {
  const router = useRouter();
  const lst = [1, 2, 3, 4, 5];
  const latest = ["2024/2025 Home Kit", "Cap", "Hoodie"]
  const comfort = ["Sweatpants", "Sweatshirt", "Mug"]

 
  
  return (
    <section className="px-6">
      <div className="flex justify-center items-center my-12">
        
        <div className="flex w-full bg-gray-900">
          
          
          <Image src={homeKit} width={1000} quality={100}/>
          <div className="flex flex-col mx-10 w-full justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <h1>Spurs Jersey</h1>
              <h1 className="text-3xl my-6">COME ON YOU SPURS</h1>
              <p>The all new 2024/2025 season home jersey is here.</p>
              <button type="button" onClick={() => router.push('/search/all')}
                className="mt-4 p-2 rounded-lg border-white border flex justify-evenly hover:bg-white hover:text-black">
                  Shop now
              </button>
            </div>
          </div>
          
          
        </div>
        
        
      </div>
      {/* <div className="flex justify-evenly">
        <h1>Come ON YOU SPURS</h1>
        <p>Spend up to $500 and stand a chance to win a trip to Tottenham Hotspur Stadium and more amazing prizes</p>
      </div> */}
      <div className="my-14">
          <h1 className="my-4 text-2xl">Featured</h1>
          <div className="flex justify-evenly overflow-hidden space-x-4">
          
            <div>
              <Link href={'/search/Shirt'} className="hover:opacity-75">
              <Image src={"https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/400w/products/15482/32118/homekit-son-24-25__44963.1718792947.png"} width={500} height={500} className="  "/>
              <h1 className="my-4">2024/2025 Home Shirt</h1>
              </Link>
              
            </div>
            <div>
              <Link href={'/search/Sweatshirt'} className="hover:opacity-75">
                <Image src={"https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/400w/products/16278/30229/mens-knitwear-spurs-mens-navy-crew-neck-cotton-jumper__30526.1712125285.jpg"} width={500} height={500} className=""/>
                <p className="my-4">Sweatshirt</p>
              </Link>
                
              </div>
            
            <div>
            <Link href={'/search/Hoodie'} className="hover:opacity-75">
              <Image src={"https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/400w/products/6490/29860/nike-club-range-spurs-nike-mens-grey-club-zip-hoodie__87632.1710741238.jpg"} width={500} height={500} className="  "/>
              <h1 className="my-4">Hoodie</h1>
            </Link>
              
            </div>
          
          
          </div>
      </div>
      
      {/* <div className='overflow-hidden w-full my-12'>
            <h1 className="text-2xl my-4">Popular Items</h1>
            <div className='overflow-x-auto'>
                <div className='flex w-full'>
            {lst.map((l, i) => (
                <div className={`w-[calc(100%/5)] h-auto mr-4 shrink-0`} key={i}>
                    
                    <Image src={home} width={900} height={300}/>
                    <h1 className="my-5">{l}</h1>
                </div>
            ))}
            
            
                </div>
            </div>
      </div> */}
        <div className="pb-12">
          <h1 className="mb-4 text-2xl">Comfort Picks</h1>
          <div className="flex justify-evenly overflow-hidden space-x-4">
              <div>
              <Link href={'/search/Beanie'} className="hover:opacity-75">
                <Image src={"https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/400w/products/19766/32402/141348_NEW_ERA_REPREVE_KOREA_FLAG_CAP_1__46911.1719475580.jpg"} width={500} height={500} className="  "/>
                <h1 className="my-4">Cap</h1>
              </Link>
                
              </div>
              <div>
              <Link href={'/search/Shorts'} className="hover:opacity-75">
                <Image src={"https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/400w/products/5865/30348/nike-club-range-spurs-nike-adult-navy-club-full-zip-shorts__37067.1713423358.jpg"} width={500} height={500} className=""/>
                <p className="my-4">Shorts</p>
              </Link>
                
              </div>
              <div>
              <Link href={'/search/Mug'} className="hover:opacity-75">
                <Image src={"https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/400w/products/19797/30183/yeti-spurs-x-yeti-navy-35oz-straw-mug__93943.1711519398.jpg"} width={500} height={500} className=""/>
                <p className="my-4">Mugs</p>
              </Link>
            
              </div>
          </div>
      </div>
    </section>

  );
}
