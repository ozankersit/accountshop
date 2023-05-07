import { FC, useState } from "react";
import { getAuth } from "firebase/auth";
import Image from "next/image";
import DashboardProfileIcon from "../../../components/Icons/DashboardProfileIcon";
import FolderIcon from "../../../components/Icons/FolderIcon";
import CartIcon from "../../../components/Icons/CartIcon";
import BagIcon from "../../../components/Icons/BagIcon";
import KeyIcon from "../../../components/Icons/KeyIcon";
import MailIcon from "../../../components/Icons/MailIcon";
import QuestionIcon from "../../../components/Icons/QuestionIcon";
import LogOutIcon from "../../../components/Icons/LogOutIcon";
import { useRouter } from "next/router";
import Link from "next/link";

interface IProps {
  children?: React.ReactNode;
}

const tabs = [
  {
    id: 1,
    icon: <DashboardProfileIcon />,
    title: "Profile Details",
    route: "/profile/dashboard",
  },
  { id: 2, icon: <BagIcon />, title: "Adverts", route: "/profile/advert" },
  { id: 3, icon: <CartIcon />, title: "Orders", route: "/profile/orders" },
  { id: 4, icon: <FolderIcon />, title: "Sales", route: "/profile/sales" },
  {
    id: 5,
    icon: <KeyIcon />,
    title: "Change Password",
    route: "/profile/change-password",
  },
  {
    id: 6,
    icon: <MailIcon />,
    title: "Change Email",
    route: "/profile/change-email",
  },
  {
    id: 7,
    icon: <QuestionIcon />,
    title: "Support",
    route: "/profile/support",
  },
  { id: 8, icon: <LogOutIcon />, title: "Log out" },
];

const ProfileLeftMenu: FC<IProps> = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const router = useRouter();
  return (
    <div className="flex gap-2.5 md:px-[150px] px-5 items-center mt-[93px] mb-[153px]">
      <div className=" flex flex-col gap-10 bg-white max-w-xs pl-7 rounded-[7px]">
        <div className="flex gap-2.5 mt-10 mr-16 items-center">
          <img src={`${user?.photoURL}`} className="w-[50px] h-[50px]"></img>{" "}
          {/*next image gelicek buraya*/}
          <span className="text-dark text-title whitespace-nowrap">{user?.displayName}</span>
        </div>
        <div className="flex flex-col gap-7 pb-52">
          {tabs.map((item) => (
            <Link href={`${item.route}`} key={item.id}>
              <div
                className={`flex flex-row-reverse justify-end gap-2 items-center cursor-pointer`}
              >
                <span
                  className={`text-storm-gray ${
                    router.route == `${item.route}` ? "!text-dark" : null
                  }`}
                >
                  {item.title}
                </span>
                {item.icon}{" "}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-[7px]">{children}</div>
    </div>
  );
};

export default ProfileLeftMenu;
