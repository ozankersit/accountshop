import React, { FC } from "react";
import FilterSection from "../../components/features/FilterSection";
import AccountCards from "./AccountCards";

export const Accounts: FC = () => {
  return (
    <div className="flex justify-center items-center md:h-screen h-auto">
      <div className="flex flex-wrap flex-col my-[50px] gap-10">
        {/* <FilterSection /> */}
        <div className="flex md:flex-nowrap flex-wrap gap-5 items-center justify-center">
        <AccountCards title="TR 30 Level Unranked Account"/>
        <AccountCards title="EUW 30 Level Unranked Account"/>
        <AccountCards title="Random Valorant Account"/>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
