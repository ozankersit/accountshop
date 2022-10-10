import { FC } from "react";
import { FooterLogoIcon } from "./FooterIcons/FooterLogoIcon";

export const Footer: FC = () => {
  return (
    <div className="bg-[url('/footerBg.jpg')] w-full items-center justify-center py-[30px] flex flex-wrap bottom-0">
      <div className="flex items-start w-full justify-evenly">
        <div className="flex flex-col">
          <FooterLogoIcon />
          <div>
            <div>
              <span className="text-white text-title-bold">
                İstanbul/Turkey
              </span>
            </div>
            <div className="py-6">
              <span className="text-white text-title-bold">Email:</span>
              <span className="text-white text-title">info@accountshop</span>
            </div>
            <div>
              <span className="text-white text-title-bold">Vergi No:</span>
              <span className="text-white text-title">
                324242432 / Lorem Ipsum
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-white text-title-bold">Contents</span>
          <ul>
            <li className="text-white text-title cursor-pointer">Games</li>
            <li className="text-white text-title cursor-pointer">Why Us ?</li>
            <li className="text-white text-title cursor-pointer">Customers</li>
            <li className="text-white text-title cursor-pointer">FAQ</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <span className="text-white text-title-bold">Pages</span>
          <ul>
            <li className="text-white text-title cursor-pointer">Home</li>
            <li className="text-white text-title cursor-pointer">Sign in</li>
            <li className="text-white text-title cursor-pointer">Sign up</li>
            <li className="text-white text-title cursor-pointer">Unranked Accounts</li>
            <li className="text-white text-title cursor-pointer">How Can I Buy ?</li>
            <li className="text-white text-title cursor-pointer">Account Sell</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <span className="text-white text-title-bold">Legal</span>
          <ul>
            <li className="text-white text-title cursor-pointer">Cookie Policy</li>
            <li className="text-white text-title cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
