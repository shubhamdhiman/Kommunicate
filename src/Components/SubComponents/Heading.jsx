import React from 'react'

function Heading({heading,subHeading}) {
  return (
    <div>
        <p className='text-2xl font-bold text-[#0a00c6]'>{heading}</p>
        {/* <p className='text-2xl font-bold text-[#483eff]'>{heading}</p> */}
        <p className='text-gray-400 text-sm'>{subHeading}</p>
    </div>
  )
}

export default Heading