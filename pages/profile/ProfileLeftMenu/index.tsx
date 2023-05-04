import { FC } from "react";
import Link from "next/link";
import { getAuth } from "firebase/auth";
import Image from "next/image";

interface IProps {
  children?: React.ReactNode;
}

const tabs = [
  { id: 1, title: "Profile Details", route: "/profile/dashboard" },
  { id: 2, title: "Adverts", route: "/profile/advert" },
  { id: 3, title: "Orders" },
  { id: 4, title: "Sales" },
  { id: 5, title: "Change Password" },
  { id: 6, title: "Change Email" },
  { id: 7, title: "Support" },
  { id: 8, title: "Log out" },
];


const ProfileLeftMenu: FC<IProps> = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <div className="flex gap-2.5  justify-center items-center mt-[93px] mb-[153px]">
      <div className=" flex flex-col gap-10 justify-center bg-white max-w-xs pl-7 rounded-[7px]">
        <div className="flex gap-2.5 mt-10 mr-16 items-center">
          {/* <Image src={`${user?.photoURL}`} width={50} height={50} /> */}
          <img src={`${user?.photoURL}`} className="w-[50px] h-[50px]"></img> {/*next imag gelicek buraya*/}
          <span className="text-dark text-title">{user?.displayName}</span>
        </div>
        <div className="flex flex-col gap-7 pb-[214px]">
          {tabs.map((item) => (
            <div key={item.id}>
              <Link href={`${item.route}`}>
                <button className="text-storm-gray">{item.title}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-[7px]">{children}</div>
    </div>
  );
};

export default ProfileLeftMenu;
