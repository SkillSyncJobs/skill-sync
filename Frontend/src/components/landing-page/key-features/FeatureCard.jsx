import React from 'react'

const FeatureCard = (props) => {
  return (
    <div className="w-[344px] h-rel bg-white rounded-xl p-6 shadow-md flex flex-col">
        <div className="h-12 w-12 bg-[#C7DCFF] rounded-xl flex items-center justify-center">
            <img src={props.icon} alt="" />
        </div>
        <div className='flex flex-col mt-4 gap-2'>
            <h6 className='text-xl font-semibold'>{props.feature}</h6>
            <p className='text-gray-600'>{props.description}</p>
        </div>
    </div>
  )
}

export default FeatureCard