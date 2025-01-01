import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='h-[730px] w-full items-center justify-center flex flex-col gap-12'>
        <div className='flex flex-col items-center justify-center gap-12'>
            <h1 className='text-[49px] max-w-[977px] text-center font-bold text-gray-900'>Bridging the Gap Between <span className='text-[#015FFE]'>Talent</span> and <span className='text-[#015FFE]'>Opportunity</span></h1>
            <p className='text-xl text-gray-700 text-center max-w-[700px]'>Empowering students with industry-ready skills and connecting companies
            with exceptional talent through our Al-driven platform.</p>
        </div>
        <div className='flex gap-4'>
            {/* student login button */}
            <Link to="/auth/student-signup">
              <button className='py-4 px-6 bg-[#015FFE] text-white rounded-xl hover:bg-[#0143B4]'>Student Login</button>
            </Link>
            {/* company login button */}
            <Link to="/auth/company-signup">
              <button className='py-4 px-6 bg-transparent text-[#015FFE] border border-[#015FFE] rounded-xl hover:bg-white'>Company Login</button>
            </Link>
        </div>
    </div>
  )
}

export default Hero