import React from 'react'
import { PhoneCall, Facebook, Twitter, Instagram, Youtube, Dribbble } from 'lucide-react';

const HeaderTop = () => {
  return (
    <div>
        <div className='hidden lg:flex bg-blue-900 py-3'>
            <div className='container mx-auto flex justify-between'>
                <div className='flex text-white'>
                    <PhoneCall></PhoneCall>
                    <p className='ml-3'> Hot Line: +8801713493026, +8801713493107</p>
                </div>
                <div className='flex gap-5 text-white'>
                    <a href="#" className='bg-blue-950 p-1 rounded-md'><Facebook></Facebook></a>
                    <a href="#" className='bg-blue-950 p-1 rounded-md'><Twitter></Twitter></a>
                    <a href="#" className='bg-blue-950 p-1 rounded-md'><Instagram></Instagram></a>
                    <a href="#" className='bg-blue-950 p-1 rounded-md'><Youtube></Youtube></a>
                    <a href="#" className='bg-blue-950 p-1 rounded-md'><Dribbble></Dribbble></a>
                </div>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default HeaderTop