import React,{FC} from 'react'
import AccordionFaq from '../features/AccordionFaq'

interface Props {
    data:any;
}

export const FaqPage:FC<Props> = ({data}) => {
  return (
    <>
        <div id='faq-page' className='flex flex-col justify-center items-center md:mt-[150px] mt-[50px] md:mb-28 mb-[50px]'>
            <div className='text-head-bold text-navy-blue faq-title md:ml-0 ml-5'>Frequently Asked Questions</div>
            <div className='flex flex-col justify-around items-center md:w-[70%] w-[90%] md:mt-[35px] mt-5 p-0 relative'>
            {data.map((item:any) => (
              <AccordionFaq
                key={item.id}
                title={(item.name)}
                content={(item.description)}
              />
            ))}
            </div>
        </div>
    </>
  )
}

export default FaqPage