import {FC} from 'react'

interface IProps {
    menuTitle:string;
    children?:React.ReactNode;
}

const ProfileRightMenu: FC<IProps> = ({menuTitle, children}) => {
  return (
    <div className="px-[50px] rounded-[7px] pt-[70px] flex flex-col">
        <div>
        <span>{menuTitle}</span>
        <hr className="text-storm-gray mr-10 lg:block hidden w-[820px]"/>
        {children}
        </div>
    </div>
  )
}

export default ProfileRightMenu