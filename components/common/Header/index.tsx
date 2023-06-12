import Link from "next/link";
import { FC, useState } from "react";
import FooterLogoIcon from "../Footer/FooterIcons/FooterLogoIcon";
import HeaderLogoIcon from "./HeaderIcons/HeaderLogoIcon";
import { MobileMenuIcon } from "./HeaderIcons/MobileMenuIcon";
import { useAuth } from "../../../context/AuthContext";
import { getAuth } from "firebase/auth";

const menuItems = [
  { id: 1, title: "Home", route:"/" },
  { id: 2, title: "Accounts", route:"/accounts" },
  { id: 3, title: "How Can I Buy ?", route:"how-can-i-buy" },
  { id: 4, title: "FAQ", route:"/#faq-page" },
];

export const Header: FC = () => {
  const { user } = useAuth();
  const auth = getAuth();
  const userProps = auth.currentUser;
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="md:py-[30px] py-[25px] md:px-[150px] px-5 flex justify-between items-center bg-concrete w-full">
      <HeaderLogoIcon />
      <div className="xl:flex hidden justify-center items-center pt-2.5 gap-[50px]">
        {menuItems.map((item) => (
          <Link href={item.route}>
            <span key={item.id} className="text-title text-dark cursor-pointer whitespace-nowrap">{item.title}</span>
          </Link>
        ))}
        <div className={`items-center gap-2.5 flex cursor-pointer`}>
          {!user.uid ? (
            <Link href="/login">
              <span className="text-title text-light-blue whitespace-nowrap">
                Sign in
              </span>
            </Link>
          ) : (
            <Link href="/profile/dashboard">
              <span className="text-white py-2 px-3 bg-primary rounded-[10px]">
                {userProps?.displayName?.charAt(0)}
              </span>
            </Link>
          )}
          <Link href="/register">
            <button
              className={`${
                !user.uid ? "block" : "hidden"
              } bg-blue-button rounded-[7px] p-2.5 w-[128px] h-[44px] text-title`}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <button
        className="xl:hidden flex"
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
      >
        <MobileMenuIcon />
      </button>
      <div
        className={
          isNavOpen
            ? "block !fixed bg-[#020124] left-0 top-0 w-[70%] max-w-xs h-screen overflow-auto z-[1000000]"
            : "hidden"
        }
      >
        <div className="pl-5 flex flex-col">
          <div className="mb-10">
            <FooterLogoIcon />
          </div>
          <div>
            <div className={`flex ${!user.uid ? "hidden":"block"}`}>
            <Link href="/profile/dashboard">
              <div className="text-white flex items-center justify-center mb-10 gap-2">
                <span className="py-2 px-3 bg-primary rounded-[10px]">{userProps?.displayName?.charAt(0)}</span>
                <span>{userProps?.displayName}</span>
              </div>
            </Link>
            </div>
            <ul className="flex flex-col justify-center gap-5">
              {menuItems.map((item) => (
                <li key={item.id} className="text-white">
                  <Link href={item.route}>{item.title}</Link>
                </li>
              ))}
              <div className={`flex flex-col gap-5 ${!user.uid ? "block":"hidden"}`}>
              <li className="text-white">
                <Link href={"/login"} >Sign in</Link>
              </li>
              <li className="text-white">
                {" "}
                <Link href={"/register"}>Sign Up</Link>{" "}
              </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
        className={
          isNavOpen
            ? "block opacity-80 !fixed bg-white left-0 top-0 z-[100000] w-screen h-screen"
            : "hidden"
        }
      ></div>
    </header>
  );
};

export default Header;
