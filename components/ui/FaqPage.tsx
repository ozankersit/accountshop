import React,{FC} from 'react'
import AccordionFaq from '../AccordionFaq'

interface Props {
    data:any;
}

export const FaqPage:FC<Props> = ({data}) => {
  return (
    <>
        <div className='flex flex-col justify-center items-center md:mt-[150px] mt-[50px]'>
            <div className='text-head-bold text-navy-blue faq-title'>Frequently Asked Questions</div>
            <div className='flex flex-col justify-around items-center md:w-[70%] w-[90%] mt-[35px] p-0 relative'>
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