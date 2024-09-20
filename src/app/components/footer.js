import React from 'react'

const Footer = () => {
  return (
    <div className='px-6 bg-gray-900 bottom-0 w-full'>
        <div className='bg-zinc-500 w-full h-0.5 my-4 opacity-45'/>
        <div className='flex lg:flex-row flex-col justify-around pb-8'>
            
            <div>
                <h1 className='my-8'>Resources</h1>
                <div className='space-y-4 text-stone-400'>
                    <p>Find A Store</p>
                    <p>Become A Member</p>
                    <p>Discounts</p>
                    <p>Send Us Feedback</p>
                </div>
                
            </div>
            <div>
                <h1 className='my-8'>Help</h1>
                <div className='space-y-4 text-stone-400'>
                    <p>Delivery</p>
                    <p>Order Status</p>
                    <p>Returns</p>
                    <p>Payment Options</p>
                    <p>Contact Us</p>
                </div>
                
            </div>
            <div>
                <h1 className='my-8'>Resources</h1>
                <div className='space-y-4 text-stone-400'>
                    <p>About Spurs</p>
                    <p>News</p>
                    <p>Careers</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer