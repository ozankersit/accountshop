import { FC } from "react";
import { useAuth } from "../../../context/AuthContext";
import ProfileIcon from "../../../components/Icons/ProfileIcon";
import Link from "next/link";

interface IProps {
  children?: React.ReactNode;
}

const tabs = [
  { id: 1, title: "Profile Details",route:"/profile/dashboard" },
  { id: 2, title: "İlanlarım",route:"/profile/advert" },
  { id: 3, title: "Orders" },
  { id: 4, title: "Sales" },
  { id: 5, title: "Change Password" },
  { id: 6, title: "Change Email" },
  { id: 7, title: "Support" },
  { id: 8, title: "Log out" },
];

const ProfileLeftMenu: FC<IProps> = ({ children }) => {
  const { user } = useAuth();
  //   console.log(user.displayName)
  return (
    <div className="flex gap-2.5  justify-center items-center mt-[93px] mb-[153px]">
      <div className=" flex flex-col gap-10 justify-center bg-white max-w-xs pl-7 rounded-md">
        <div className="flex gap-2.5 mt-10 mr-16">
          <ProfileIcon />
          <span className="text-dark text-title">user.DisplayName</span>
        </div>
        <div className="flex flex-col gap-7 pb-[214px]">
          {tabs.map((item) => (
            <div key={item.id}>
             <Link href={`${item.route}`}><button className="text-storm-gray">{item.title}</button></Link>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
};

export default ProfileLeftMenu;
