'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useRouter } from 'next/navigation';
import axiosInstance from '../utils/axiosInstance';
import { useAuth } from '../context/AuthContext';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ menuOpen, onMenuToggle }) => {
  const [user, setUser] = useState(null)
  const [menu, setMenu] = useState(false)

  // useEffect(() => {
  //   axiosInstance.get("users/getOneUser").then((res) => {
  //     setUser(res.data.data)
  //     console.log(res.data.data)
  //   })
  // }, [])
  const router = useRouter();

  const handleLogout = () => {
    logout();
  }
  return (  
    <header className='flex justify-between h-14 px-6 sticky top-0 bg-gray-900 justify-center items-center z-50 w-full'>
        <button onClick={onMenuToggle} className="block sm:hidden"><MenuIcon /></button>
        {menuOpen ?  <div className='sm:hidden absolute left-0 top-12 min-h-screen px-12 bg-black py-6 space-y-6 flex flex-col'>
          <Link href={'/'} onClick={onMenuToggle}>SPURS</Link>
          <Link href={'/cart'} onClick={onMenuToggle}>Cart</Link>
          <Link href={'/wishlist'} onClick={onMenuToggle}>Wishlist</Link>
        </div>:<></>}
       
        <div className="hidden sm:block sm:text-xl">
            <Link href={'/'}>SPURS</Link>
        </div>
        <div className='hidden sm:flex space-x-4 space-x-4'>
            
              <Link href={'/cart'} className='border p-2 rounded-md border-transparent hover:bg-gray-700 hover:brightness-125'><ShoppingCartIcon /></Link>
              <Link href={'/wishlist'} className='border p-1.5 rounded-md border-transparent hover:bg-gray-700 hover:brightness-125'><FavoriteBorderIcon /></Link>
              {/* {isAuthenticated === 'true' ? <><button onClick={handleLogout}>Logout</button></>:<><button className='border p-1.5 rounded-md border-transparent hover:bg-gray-700 hover:brightness-125' onClick={() => router.push('/auth/login')}>Login</button>
              <button className='border p-1.5 rounded-md border-transparent hover:bg-gray-700 hover:brightness-125' onClick={() => router.push('/auth/signup')}>Sign Up</button></> 
              } */}
            
        </div>
        
    </header>
  )
}

export default Header