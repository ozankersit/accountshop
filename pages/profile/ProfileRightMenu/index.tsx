import {FC} from 'react'

interface IProps {
    menuTitle:string;
    children?:React.ReactNode;
}

const ProfileRightMenu: FC<IProps> = ({menuTitle, children}) => {
  return (
    <div className="px-[50px] rounded-[7px] pt-[70px] flex flex-col">
        <details>
        <summary>{menuTitle}</summary>
        <hr className="text-storm-gray mr-10 lg:block hidden w-full"/>
        {children}
        </details>
    </div>
  )
}

export default ProfileRightMenu