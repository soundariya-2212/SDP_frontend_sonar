import React from 'react'
import women1 from '../../assets/Images/women1.png';
const page1 = () => {
  return (
    <>
         <div className='h-full w-[100vw] flex flex-col md:flex-row items-center px-3 py-7 md:px-10 mt-10 md:mt-0 overflow-x-hidden'>
            <img src={women1} alt="Hero" style={{marginLeft:'10rem'}} className='h-96 w-80'/>
            <div className='flex-1 flex flex-col items-start ml-64 md:ml-15'>
                <h1 className='font-bold text-2xl md:text-3xl text-center md:text-left mt-2 mb-4 max-w-lg dark:text-white' style={{ marginLeft: '-2rem' }}>
                    Anytime Anywhere Learn on your Suitable Schedule
                </h1>
                <p className='w-96'>
                    Your future, your choice. Enjoy personalized learning experiences designed to help you achieve your goals and unlock your potential.
                </p>
            </div>
        </div>
    </>
  )
}

export default page1