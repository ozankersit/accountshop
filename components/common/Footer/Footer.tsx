import { FC } from "react";
import { FooterLogoIcon } from "./FooterIcons/FooterLogoIcon";
import MasterCardIcon from "../../Icons/MasterCardIcon";
import VisaIcon from "../../Icons/VisaIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import DiscordIcon from "../../Icons/DiscordIcon";
import Link from "next/link";

export const Footer: FC = () => {
  return (
    <footer className="bg-[url('/footerBg.jpg')] w-full items-center justify-center flex flex-wrap bottom-0">
    <div className={"max-w-[1280px] w-full lg:py-[30px] py-10 px-5"}>
     <div className={"w-full flex lg:flex-row flex-col"}>
       <div>
         <FooterLogoIcon className={"max-w-[400px] w-full lg:mb-[80px] mb-10"}/>
         <p className="text-white text-title-bold mb-6">İstanbul / Turkey</p>
         <p className={"mb-6 flex flex-wrap"}>
           <span className="text-white text-title-bold">Email:</span>
           <span className="text-white text-title">info@accountshop</span>
         </p>
         <p>
           <span className="text-white text-title-bold">Vergi No:</span>
           <span className="text-white text-title">324242432 / Lorem Ipsum</span>
         </p>
       </div>
       <div className={"lg:ml-auto lg:mt-4 mt-10 flex flex-col gap-[15px]"}>
         <p className="text-white text-title-bold mb-6">Contents</p>
         <p className="text-white text-title cursor-pointer">Games</p>
         <p className="text-white text-title cursor-pointer">Why Us ?</p>
         <p className="text-white text-title cursor-pointer">Customers</p>
         <Link href="/#faq-page">
         <p className="text-white text-title cursor-pointer">FAQ</p>
         </Link>
       </div>
       <div className={"lg:ml-auto lg:mt-4 mt-10 flex flex-col gap-[15px]"}>
         <p className="text-white text-title-bold mb-6">Pages</p>
         <Link href="/">
         <p className="text-white text-title cursor-pointer">Home</p>
         </Link>
         <Link href="/login">
         <p className="text-white text-title cursor-pointer">Sign in</p>
         </Link>
         <Link href="/register">
         <p className="text-white text-title cursor-pointer">Sign Up</p>
         </Link>
         <p className="text-white text-title cursor-pointer">Unranked Accounts</p>
         <Link href="/how-can-i-buy">
         <p className="text-white text-title cursor-pointer">How Can I Buy ?</p>
         </Link>
         <p className="text-white text-title cursor-pointer">Account Sell</p>
       </div>
       <div className={"lg:ml-auto lg:mt-4 mt-10 flex flex-col gap-[15px]"}>
         <p className="text-white text-title-bold mb-6">Legal</p>
         <p className="text-white text-title cursor-pointer">Cookie Policy</p>
         <p className="text-white text-title cursor-pointer">Privacy Policy</p>
       </div>
     </div>
      <div className={"w-full border border-white lg:mt-[50px] lg:mb-[30px] mt-5 mb-5"}/>
      <div className={"w-full flex items-center"}>
      <div className={"flex"}>
        <MasterCardIcon className="mr-5"/>
        <VisaIcon/>
      </div>
        <div className={"ml-auto flex"}>
          <InstagramIcon className="mr-5"/>
          <DiscordIcon/>
        </div>
      </div>
    </div>

    </footer>
  );
};

export default Footer;
