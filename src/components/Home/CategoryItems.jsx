import React from 'react'
import { Link } from 'react-router'

const CategoryItems = () => {
  return (
    <div>
        <Link to="/" className='py-2 md:py-6 mx-2 rounded-xl bg-[#f2fce4] w-fit text-center transition-all hover:shadow-xl inline-block'>
      <img src="/Burgercate.png" alt="Burger"/>
      <h3 className='pt-2 md:pt-4 font-bold text-xs md:text-base text-primary hover:text-brand'>Cake & Milk</h3>
      <p className='font-normal text-xs md:text-sm text-secondary hover:text-brand'>26 items</p>
    </Link>
    </div>
  )
}

export default CategoryItems
