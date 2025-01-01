import React from 'react'
import StarIcon from '../../../assets/star-icon.svg'

const TestimonalCard = (props) => {
  return (

    
    <div className='h-rel w-[277px] bg-white rounded-xl p-6'>
        <div className='mt-4 flex justify-center'>
            <img src={props.image} alt="" />
        </div>

        <div className='flex mt-8'>
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
        </div>

        <p className='text-gray-600 mt-4'>{props.text}</p>

        <div className='mt-4'>
            <h1 className='font-semibold'>{props.name}</h1>
            <p className='text-gray-600'>{props.designation}</p>
        </div>
    </div>
  )
}

export default TestimonalCard