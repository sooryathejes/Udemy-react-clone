import { useState } from 'react'
import filter from './img/svgexport-18.svg'



interface Props {
  items: string,
  id: number
  showFilter:()=>void
}

export default function Filter({ showFilter }: Props) {  
  return (
    <div className=''>
      <div className=''>
        <div className="flex justify-center items-center w-81 h-62 border border-[#9794b0] rounded-sm me-4 cursor-pointer" onClick={showFilter}>
          <img className='w-20 h-20' src={filter} alt="" />
          <p className='text-14 font-[U-bold] ms-4'>Filter</p>
        </div>

      </div>
      
    </div>

  ) 
} 
 