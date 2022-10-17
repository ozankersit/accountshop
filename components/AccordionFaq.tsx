import {FC, useState} from 'react';
import CloseIcon from './Icons/CloseIcon';
import PlusIcon from './Icons/PlusIcon';

interface Props {
  content: string,
  defaultState?: boolean,
  title: string,
  openModal?: void
}

export const AccordionFaq: FC<Props> = ({content, defaultState = false, title}) => {
  const [isActive, setIsActive] = useState(defaultState);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div className='w-full relative mb-2.5 after:content-[""] after:absolute after:bottom-0 after:w-full after:h-[1px]'>
      <div className={`${isActive ? "px-[30px] pb-0 pt-[30px] rounded-br-none rounded-bl-none" : "p-[30px] rounded-[7px]"} w-full bg-white border-none flex justify-between items-center`} onClick={handleToggle}>
        <span className={`${isActive ? "text-primary" : "text-navy-blue"} text-title-bold lg:p-0 p-3`}>{title}</span>
        {isActive ? <CloseIcon /> : <PlusIcon />}
      </div>
      <div className={`${!isActive && "hidden"} m-w-full bg-white text-normal text-storm-gray px-[30px] pb-[30px] pt-[17px] lg:border-none`}>
        <span className='text-normal text-storm-gray'>{content}</span>
      </div>
    </div>
  );
}

export default AccordionFaq;
