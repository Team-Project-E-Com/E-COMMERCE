import React from 'react'
import {assets} from '../assets/assets'

const Hero = () => {
  return (
    <div className='border border-gray-400 flex flex-col sm:flex-row '>
        {/* Hero left side */}
        <div className='flex items-center justify-center w-full sm:w-1/2 py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className=' font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>

                <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Lastest Arrivals</h1>

                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>     
        </div> 
        {/* Hero for right side  */}
        <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero;
