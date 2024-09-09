"use client";
import Image from "next/image";
import spurs from "../../public/spurs.jpg"
import homeKit from "../../public/homekit.webp"
import { home } from "./utils";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from 'next/navigation'

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
              <button type="button" onClick={() => router.push('/search')}
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
          {latest.map((l, i) => (
            <div>
              <Image src={spurs} width={500} className="  "/>
              <h1 className="my-4">{l}</h1>
            </div>
          ))}
          
          </div>
      </div>
      
      <div className='overflow-hidden w-full my-12'>
            <h1 className="text-2xl my-4">Popular Items</h1>
            <div className='overflow-x-auto'>
                <div className='flex w-full'>
            {lst.map((l, i) => (
                <div className={`w-[calc(100%/5)] h-auto mr-4 shrink-0`}>
                    
                    <Image src={home} width={900} height={300}/>
                    <h1 className="my-5">{l}</h1>
                </div>
            ))}
            
            
                </div>
            </div>
        </div>
        <div className="pb-12">
          <h1 className="mb-4 text-2xl">Comfort Picks</h1>
          <div className="flex justify-evenly overflow-hidden space-x-4">
            {comfort.map((c, i) => (
              <div key={i}>
                <Image src={spurs} width={500} className=""/>
                <p className="my-4">{c}</p>
              </div>
            ))}
          </div>
      </div>
    </section>

  );
}
