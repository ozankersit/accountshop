import { FC } from "react";
import { FooterLogoIcon } from "./FooterIcons/FooterLogoIcon";

export const Footer: FC = () => {
  return (
    <div className="bg-navy-blue w-full flex items-center justify-center min-w-[1280px] bottom-0">
      <div className="flex my-[80px]">
        <div className="flex flex-col ml-5">
          <FooterLogoIcon/>
          <div className="mt-[77px]"><span className="text-sub-head-bold text-white">İstanbul/Turkey</span></div>
          <div className="mt-[17px]"><span className="text-sub-head-bold text-white">Email: </span> <span className="text-sub-head text-white">info@accountshop</span></div>
          <div className="mt-[17px]"><span className="text-sub-head-bold text-white">Vergi No: </span> <span className="text-sub-head text-white">324242432/Lorem Ipsum</span></div>
        </div>
        <div className="flex flex-col mx-[149px] mt-[17px]">
          <span className="text-sub-head-bold text-white mb-[17px]">Contents</span>
          <ul>
            <li className="text-sub-head text-white mb-[17px] cursor-pointer">Games</li>
            <li className="text-sub-head text-white mb-[17px] cursor-pointer">Why Us ?</li>
            <li className="text-sub-head text-white mb-[17px] cursor-pointer">Customers</li>
            <li className="text-sub-head text-white cursor-pointer">FAQ</li>
          </ul>
        </div>
        <div className="flex flex-col mt-[17px] mr-[70px]">
          <span className="text-sub-head-bold text-white mb-[17px]">Pages</span>
          <ul>
            <li className="text-sub-head text-white mb-[17px] cursor-pointer">Home</li>
            <li className="text-sub-head text-white mb-[17px] cursor-pointer">Sign in</li>
            <li className="text-sub-head text-white mb-[17px] cursor-pointer">Sign up</li>
            <li className="text-sub-head text-white mb-[17px] cursor-pointer">Unranked Accounts</li>
            <li className="text-sub-head text-white cursor-pointer">How Can I Buy ?</li>
          </ul>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
