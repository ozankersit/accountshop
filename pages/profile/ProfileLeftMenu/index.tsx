import { FC } from "react";
import { getAuth } from "firebase/auth";
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
import Button from "../../../components/features/Button";
import { useAuth } from "../../../context/AuthContext";

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
];

const ProfileLeftMenu: FC<IProps> = ({ children }) => {
  const { logOut } = useAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const auth = getAuth();
  const user = auth.currentUser;
  const router = useRouter();
  return (
    <div className="flex gap-2.5 md:px-[150px] px-5 items-center mt-[93px] mb-[153px]">
      <div className=" flex flex-col gap-10 bg-white max-w-xs pl-7 rounded-[7px]">
        <div className="flex gap-2.5 mt-12 mr-16 items-center">
          <div className="py-2.5">
            <span className="text-white py-[13px] px-[17px] bg-primary rounded-[10px]">
              {user?.displayName?.charAt(0)}
            </span>
          </div>
          <span className="text-dark text-title whitespace-nowrap">
            {user?.displayName}
          </span>
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
                <div
                  className={`${
                    router.route == `${item.route}`
                      ? "dashboard-left-menu"
                      : null
                  }`}
                >
                  {item.icon}
                </div>
              </div>
            </Link>
          ))}
          <div
            className={`flex flex-row-reverse justify-end gap-2 items-center cursor-pointer`}
          >
            <Button onClick={handleLogout}>
              <span className="text-primary">Log Out</span>
            </Button>
            <div>
              <LogOutIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-[7px]">{children}</div>
    </div>
  );
};

export default ProfileLeftMenu;
