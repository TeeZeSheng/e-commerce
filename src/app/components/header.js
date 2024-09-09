import React from 'react'
import Link from 'next/link'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Header = () => {
  return (
    <header className='flex justify-between h-14 px-6 sticky top-0 bg-gray-900 justify-center items-center z-50 w-full'>
        <div>
            <Link href={'/'}>Spurs</Link>
        </div>
        <div className='space-x-4'>
            
              <Link href={'/cart'} className='border p-1.5 rounded-md border-transparent hover:border-white'><ShoppingCartIcon /></Link>
              <Link href={'/wishlist'} className='border p-1.5 rounded-md border-transparent hover:border-white'><FavoriteBorderIcon /></Link>
            
            
        </div>
        
    </header>
  )
}

export default Header