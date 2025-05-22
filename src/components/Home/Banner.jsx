import React from 'react'

function Banner() {
  return (
    <section>
      <div className="container">
        <div className='p-24 bg-no-repeat bg-cover' style={{ backgroundImage: "url('/banner.png')"}}>

            <h1 className='font-bold text-7xl text-primary max-w-2xl'>Fresh Vegetables Big discount</h1>
            <p>Save up to 50% off on your first order</p>
        </div>
      </div>
    </section>
  )
}

export default Banner
