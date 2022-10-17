import React, {FC} from 'react'

export const StatisticsSection:FC = () => {
  return (
    <>
   <div className="bg-[url('/ryzeBg.png')] w-full h-[620px] flex justify-center items-center mt-[100px] bg-center">
        <div className='flex flex-wrap justify-center gap-36'>
            <div className='flex flex-col'>
                <span className='text-white text-3xl-bold'>54,645</span>
                <span className='text-white text-2xl'>Completed Orders</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-white text-3xl-bold'>29,380</span>
                <span className='text-white text-2xl'>Happy Customers</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-white text-3xl-bold'>1000+</span>
                <span className='text-white text-2xl'>Stock Number</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default StatisticsSection