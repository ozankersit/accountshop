import Link from "next/link";
import { FC, useState } from "react";
import FooterLogoIcon from "../Footer/FooterIcons/FooterLogoIcon";
import HeaderLogoIcon from "./HeaderIcons/HeaderLogoIcon";
import { MobileMenuIcon } from "./HeaderIcons/MobileMenuIcon";

export const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="md:py-[30px] py-[25px] md:px-[150px] px-5 flex justify-between items-center bg-concrete w-full">
      <Link href="/">
        <HeaderLogoIcon />
      </Link>
      <div className="xl:flex hidden justify-center items-center pt-2.5 gap-[50px]">
        <Link href="/">
          <span className="text-title text-dark cursor-pointer whitespace-nowrap">
            Home
          </span>
        </Link>
        <Link href="/">
          <span className="text-title text-dark cursor-pointer whitespace-nowrap">
            Unranked Accounts
          </span>
        </Link>
        <Link href="/how-can-i-buy">
          <span className="text-title text-dark cursor-pointer whitespace-nowrap">
            How Can I Buy ?
          </span>
        </Link>
        <Link href="#faq-page">
          <span className="text-title text-dark cursor-pointer whitespace-nowrap">
            FAQ
          </span>
        </Link>
        <Link href="/">
          <span className="text-title text-dark cursor-pointer whitespace-nowrap">
            Account Sell
          </span>
        </Link>
        <div className="flex items-center gap-2.5">
          <Link href="/login">
            <span className="text-title text-light-blue cursor-pointer whitespace-nowrap">
              Sign in
            </span>
          </Link>
          <Link href="/register">
            <button className="bg-blue-button rounded-[7px] p-2.5 w-[128px] h-[44px] text-title">
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
            ? "block !fixed absolute bg-[#020124] left-0 top-0 w-[70%] max-w-xs h-screen overflow-auto z-[1000000]"
            : "hidden"
        }
      >
        <FooterLogoIcon/>
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
