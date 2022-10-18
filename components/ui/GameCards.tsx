import Link from "next/link";
import { FC, useState } from "react";
import ListIcon from "../Icons/ListIcon";

export const GameCards: FC = () => {
  const [lolListCount, lolSetListCount] = useState(0);
  const [valoListCount, valoSetListCount] = useState(0);
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-5 md:mt-28 mt-[61px] px-5">
        <Link href="">
          <div className="bg-[url('/lolBg.png')] lg:w-[640px] lg:h-[381px] lg:bg-center bg-right rounded-[7px] md:w-[360px] h-[360px] w-full flex flex-col justify-end cursor-pointer p-[30px]">
            <div className="text-white text-head-bold mb-2.5">
              League Of Legends
            </div>
            <div className="flex flex-row text-white text-normal">
              <div className="mr-2.5">
                <ListIcon />
              </div>
              <div>
                {lolListCount} List
              </div>
            </div>
          </div>
        </Link>
        <Link href="">
          <div className="bg-[url('/valoBg.png')] lg:w-[640px] lg:h-[381px] bg-center rounded-[7px] md:w-[360px] h-[360px] w-full flex flex-col justify-end cursor-pointer p-[30px]">
            <div className="text-white text-head-bold mb-2.5">
              Valorant
            </div>
            <div className="flex flex-row text-white text-normal">
              <div className="mr-2.5">
                <ListIcon />
              </div>
              <div>
                {valoListCount} List
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default GameCards;
