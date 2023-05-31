import Link from "next/link";
import { FC, useState } from "react";
import ListIcon from "../Icons/ListIcon";

export const GameCards: FC = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center md:mt-28 mt-[61px] px-5">
        <Link href="/accounts">
          <div className="bg-[url('/lolBg.png')] lg:w-[640px] lg:h-[381px] lg:bg-center bg-right rounded-[7px] md:w-[360px] h-[360px] w-full flex flex-col justify-end cursor-pointer p-[30px] md:mr-5 md:mb-0 mb-5">
            <div className="text-white text-head-bold mb-2.5">
              League Of Legends
            </div>
          </div>
        </Link>
        <Link href="/accounts">
          <div className="bg-[url('/valoBg.png')] lg:w-[640px] lg:h-[381px] bg-center rounded-[7px] md:w-[360px] h-[360px] w-full flex flex-col justify-end cursor-pointer p-[30px]">
            <div className="text-white text-head-bold mb-2.5">
              Valorant
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default GameCards;
