import React from 'react'
import Logo from '../../assets/logo-blue.svg'
import BlueButton from './header/BlueButton'

const Footer = () => {
  return (

    <div className='-mt-[170px]'>
    <div className="absolute w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#015FFE" fill-opacity="1" d="M0,160L120,133.3C240,107,480,53,720,53.3C960,53,1200,107,1320,133.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    </div>
    
    
    <div className='h-rel w-full pt-[170px] bg-[#EFF6FF] flex flex-col items-center px-24 pb-12'>
        <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='text-[49px] text-gray-900 font-semibold'>Unlock your Future Today</h1>
            <p className='text-xl text-gray-600'>Join SkillSync now to enhance your skills and connect with top industry opportunities.</p>
            <button className='py-4 px-6 bg-transparent text-[#015FFE] border border-[#015FFE] rounded-xl mt-10 hover:bg-white'>Get your First Job!</button>
        </div>

        <div className='flex justify-between w-full mt-24'>
            <div>
                <img src={Logo} />
                <div className='flex gap-6'>
                    <a className='text-primary' href="">About Us</a>
                    <a className='text-primary' href="">Contact Us</a>
                    <a className='text-primary' href="">Work With Us</a>
                    <a className='text-primary' href="">Blog</a>
                    <a className='text-primary' href="">Help Center</a>
                </div>
            </div>
            <div className='flex items-end'>
                <div >
                    <p className='text-primary mb-1 font-semibold'>Subscribe</p>
                    <div className='flex gap-2'>
                        <input className='px-4 py-2 bg-transparent text-primary border border-primary rounded-xl placeholder:text-primary' type="text" placeholder='Enter your email'/>
                        <BlueButton button="Subscribe"/>
                    </div>
                    <div className='flex gap-4 mt-1'>
                        <p className='text-primary text-xs'>By subscribing you agree to our Privacy Policy.</p>
                        <a className='text-primary text-xs underline' href="">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[2px] w-full bg-primary mt-24'></div>

        <div className='flex justify-between w-full mt-8'>
            <div className='flex gap-8'>
                <a className='text-xs text-primary underline' href="">Privacy Policy</a>
                <a className='text-xs text-primary underline' href="">Terms of Service</a>
                <a className='text-xs text-primary underline' href="">Cookies Settings</a>
            </div>
            <p className='text-xs text-primary'>© 2024 SkillSync. All rights reserved.</p>
        </div>
    </div>
    </div>
  )
}

export default Footer