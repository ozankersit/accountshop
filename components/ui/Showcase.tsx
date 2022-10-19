import Link from "next/link";
import { FC } from "react";
import Button from "../Button";
import ArrowIcon from "../Icons/ArrowIcon";

export const Showcase: FC = () => {
  return (
    <div className="flex justify-center items-center flex-wrap md:pt-28 px-5 pt-[50px]">
      <div className="flex flex-col">
        <p className="text-3xl-bold text-dark !leading-10 mb-2.5 md:w-[337px] showcase-main">
          Own the game account you want with filtering
        </p>
        <p className="text-sub-head text-dark mb-[30px] md:w-[545px] showcase-main">
          You can reach the account you want to have by using the filtering
          feature.
        </p>
        <div className="flex flex-wrap items-center showcase-button">
        <Link href="/">
          <Button className="bg-blue-button rounded-[7px] w-[225px] h-[60px] text-title-bold flex items-center p-5">
            Shop Now
            <div className="ml-[15px]">
              <ArrowIcon />
            </div>
          </Button>
        </Link>
        <Link href="">
            <span className="ml-[15px] text-primary text-title underline cursor-pointer md:inline hidden">or sell account</span>
        </Link>
        </div>
      </div>
      <div className="cards">
        <img src="/cards.png" alt="" />
      </div>
    </div>
  );
};

export default Showcase;
