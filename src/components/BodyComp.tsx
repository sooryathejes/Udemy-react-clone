import React from 'react'
import CoursesList from './CoursesList';


export default function BodyComp() {
  return (
    <div className='py-32 px-24'>
      <h1 className='font-[U-bold] text-18 h-22 mb-24 max-w-[1340px] mx-auto'>10,000 results for "python"</h1> 
      <CoursesList/>
    </div>
  )
} 
