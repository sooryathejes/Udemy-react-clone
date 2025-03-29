import React from 'react'

export default function Sort() {
  return (
    <div className='flex-grow bg-[#] sm:w-[178px] sm:h-60 cursor-pointer'>
      <div className="flex justify-start   h-62 border border-[#9794b0] rounded-sm ms-4 px-16 pt-20 sm:w-[178px] flex-col ">
        <p className='mt-[-15px] font-[U-bold] text-14'>Sort By</p>
        <select className='bg-white font-[U-reg] text-[#303141] outline-none text-14' name="" id="" >
          <option className='bg-white font-U-reg' value="">Most Revalent</option>
          <option className='bg-white' value="">Hieghest Rated</option>
          <option className='bg-white' value="">Most Reviewed</option>
          <option className='bg-white' value="">Newest</option>
        </select>
      </div>
    </div>
  )
}