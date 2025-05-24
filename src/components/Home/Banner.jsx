import { IoIosSend } from "react-icons/io";

import React from 'react'

function Banner() {
  return (
    <section className="mt-7">
      <div className="container">
        <div className='p-24 bg-no-repeat bg-cover rounded-4xl' style={{ backgroundImage: "url('/banner.png')"}}>

            <h1 className='font-bold text-3xl lg:text-7xl text-primary max-w-2xl'>Fresh Vegetables Big discount</h1>
            <p className='pt-10 pb-16 text-3xl font-normal text-secondary'>Save up to 50% off on your first order</p>
            <div className=' bg-white rounded-full max-w-md flex items-center gap-2 pl-2'>
            <IoIosSend className="text-4xl text-secondary"/>
              <input type="email" placeholder='Your email address' className="w-full outline-0"/>
              <button className='w-fit px-10 py-5 bg-brand rounded-full text-white text-base cursor-pointer'>Subscribe</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
