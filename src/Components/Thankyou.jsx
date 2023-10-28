import React from 'react'
import { thankyou } from '../Utils/thankyou'
import thankIcon from '../assets/images/icon-thank-you.svg'
function Thankyou() {
  return (
    <div className="w-[400px] h-full flex flex-col justify-center items-center">
        <img src={thankIcon} />
        <p className='text-3xl font-bold text-[#0a00c6] my-4'>Thankyou</p>
        <p className='text-center text-gray-400'>{thankyou}</p>
    </div>
  )
}

export default Thankyou