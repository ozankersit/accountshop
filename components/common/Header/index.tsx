import Link from "next/link";
import { FC, useState } from "react";
import FooterLogoIcon from "../Footer/FooterIcons/FooterLogoIcon";
import HeaderLogoIcon from "./HeaderIcons/HeaderLogoIcon";
import { MobileMenuIcon } from "./HeaderIcons/MobileMenuIcon";
import Button from "../../features/Button";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from "next/router";
import ProfileIcon from "../../Icons/ProfileIcon";
import { getAuth } from "firebase/auth";

export const Header: FC = () => {
  const {  logOut, user } = useAuth();
  const auth = getAuth();
  const userProps = auth.currentUser
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <header className="md:py-[30px] py-[25px] md:px-[150px] px-5 flex justify-between items-center bg-concrete w-full">
      <HeaderLogoIcon />
      <div className="xl:flex hidden justify-center items-center pt-2.5 gap-[50px]">
        <Link href="/">
          <span className="text-title text-dark cursor-pointer whitespace-nowrap">
            Home
          </span>
        </Link>
        <Link href="/accounts">
          <span className="text-title text-dark cursor-pointer whitespace-nowrap">
            Accounts
          </span>
        </Link>
        <Link href="/how-can-i-buy">
          <span className="text-title text-dark cursor-pointer whitespace-nowrap">
            How Can I Buy ?
          </span>
        </Link>
        <Link href="/#faq-page">
          <span className="text-title text-dark cursor-pointer whitespace-nowrap">
            FAQ
          </span>
        </Link>
        <Link href="/">
          <span className="text-title text-dark cursor-pointer whitespace-nowrap">
            Account Sell
          </span>
        </Link>
        <div className={`items-center gap-2.5 flex`}>
          {!user.uid ? (
            <Link href="/login">
              <span className="text-title text-light-blue cursor-pointer whitespace-nowrap">
                Sign in
              </span>
            </Link>
          ) : (
            // <Button onClick={handleLogout}>Logout</Button>
            <Link href="/profile/dashboard"><img src={`${userProps?.photoURL}`} className="w-[50px] h-[50px]"></img></Link>
            
          )}
          <Link href="/register">
            <button className={`${!user.uid ? "block":"hidden"} bg-blue-button rounded-[7px] p-2.5 w-[128px] h-[44px] text-title`}>
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
        <FooterLogoIcon />
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
