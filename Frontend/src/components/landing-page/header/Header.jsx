import React from 'react'
import BlueButton from './BlueButton'
import TransparentButton from './TransparentButton'
import Logo from '../../../assets/logo-blue.svg'

const Header = () => {
  return (
    <div className='h-16 bg-white shadow-sm w-full flex justify-between items-center px-16 sticky top-0 z-50'>
        <img src={Logo} alt="" />
        <div className='flex gap-12'>
            <div className='flex items-center gap-12'>
                <a href="">Features</a>
                <a href="">About</a>
            </div>
            <div className='flex gap-4'>
                <TransparentButton button="Login"/>
                <BlueButton button="Get Started"/>
            </div>
        </div>
    </div>  
  )
}

export default Header