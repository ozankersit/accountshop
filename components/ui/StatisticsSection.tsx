import React, {FC} from 'react'

export const StatisticsSection:FC = () => {
  return (
    <>
   <div className="bg-[url('/ryzeBg.png')] w-full h-[620px] flex justify-center items-center bg-center">
        <div className='flex flex-wrap justify-center md:flex-row flex-col'>
            <div className='flex flex-col'>
                <span className='text-white text-3xl-bold'>54,645</span>
                <span className='text-white text-3xl-bold'>Completed Orders</span>
            </div>
            <div className='flex flex-col md:mx-36 mx-auto md:my-auto my-36'>
                <span className='text-white text-3xl-bold'>29,380</span>
                <span className='text-white text-3xl-bold'>Happy Customers</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-white text-3xl-bold'>1000+</span>
                <span className='text-white text-3xl-bold'>Stock Number</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default StatisticsSection