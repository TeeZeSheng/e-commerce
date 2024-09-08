"use client";
import Image from "next/image";
import spurs from "../../public/spurs.jpg"
import homeKit from "../../public/homekit.webp"
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <section className="px-6">
      <div className="flex flex-col items-center my-4">
        <h1 className="text-2xl">Spurs Shop</h1>
      </div>
      <div className="flex justify-center items-center">
        
        <div className="flex w-full bg-gray-900">
          
          
          <Image src={homeKit} width={800} quality={100}/>
          <div className="flex flex-col items-center justify-center mx-10">
            <h1>Shop the 2024/2025 season home kit</h1>
            <button type="button" onClick={() => router.push('/search')}>Shop now</button>
          </div>
          
          
        </div>
        
        
      </div>
      <div className="flex justify-evenly">
        <h1>Come ON YOU SPURS</h1>
        <p>Spend up to $500 and stand a chance to win a trip to Tottenham Hotspur Stadium and more amazing prizes</p>
      </div>
      <div>
          <h1 className="mb-4">Explore</h1>
          <div className="flex justify-evenly overflow-hidden">
          <Image src={spurs} width={500} className="  "/>
          <Image src={spurs} width={500} className="ml-4"/>
          <Image src={spurs} width={500} className="ml-4"/>
          </div>
      </div>
    </section>

  );
}
