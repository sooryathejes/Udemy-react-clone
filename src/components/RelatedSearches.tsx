import React from 'react'

let searches = [
    "100 days of code",
    "100 days of python",
    "pcep",
    "python for data science and science and machine learning bootcamp",
    "leaern python programming master class",
    "python mega course",
    "complete python bootcamp",
    "python bootcamp"
]

export default function RelatedSearches() {
    return (
        <div className='pt-16 mb-32'>
            <div>
                <h1 className='font-[U-bold] text-16'>Related searches</h1>
            </div>
            <div className='flex flex-wrap mt-16 gap-2'>
                {
                    searches.map((item, index) => (
                        <div key={index} className='flex justify-center items-center rounded-full text-white font-[U-bold] px-12 text-14 h-34 bg-[#8600d7] overflow-hidden whitespace-nowrap text-ellipsis'>
                            <p className='overflow-hidden whitespace-nowrap text-ellipsis'>{item}
                            </p>
                        </div>
                     ))}
            </div>

        </div>
    )
} 