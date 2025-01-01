import React from 'react'

const TransparentButton = (props) => {
  return (
    <button className='py-2 px-4 bg-transparent text-[#015FFE] border border-[#015FFE] rounded-xl hover:bg-white'>{props.button}</button>
  )
}

export default TransparentButton