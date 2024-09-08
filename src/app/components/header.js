import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex justify-between h-14 px-6 sticky top-0 bg-gray-900 justify-center items-center z-50 w-full'>
        <div>
            <Link href={'/'}>Spurs</Link>
        </div>
        <div className=''>
            New & featured
            kids
            Men
            Women
        </div>
        <div>
            <Link href={'/cart'}>Cart</Link>
            fav
        </div>
        
    </header>
  )
}

export default Header