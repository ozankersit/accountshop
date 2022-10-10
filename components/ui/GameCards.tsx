import Link from "next/link";
import { FC } from "react";
import LolCardIcon from "../Icons/LolCardIcon";
import ValoCardIcon from "../Icons/ValoCardIcon";

export const GameCarts: FC = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-5 mt-28">
        <Link href="">
          <div className="cursor-pointer"><LolCardIcon/></div>
        </Link>
        <Link href="">
           <div className="cursor-pointer"><ValoCardIcon/></div>
        </Link>
      </div>
    </>
  );
};

export default GameCarts;
