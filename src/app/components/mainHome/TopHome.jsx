import React from 'react'
import { GoChevronRight } from "react-icons/go";

const TopHome = () => {
  return (
    <div className='flex mt-5 items-center gap-1'>
        <p className='text-xs text-[#9CA3AF]'>Home</p>
        <GoChevronRight />
        <p className='text-xs '>Shop</p>

    </div>
  )
}

export default TopHome