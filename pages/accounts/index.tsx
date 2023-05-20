import React, { FC } from "react";
import FilterSection from "../../components/features/FilterSection";
import AccountCards from "./AccountCards";

export const Accounts: FC = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col my-[50px] gap-10">
        {/* <FilterSection /> */}
        <div className="flex gap-5 items-center max-w-[754px]">
        <AccountCards title="TR 30 Level Unranked Account"/>
        <AccountCards title="EUW 30 Level Unranked Account"/>
        </div>
        <div className="flex gap-5 justify-center items-center max-w-[754px]">
        <AccountCards title="Random Valorant Account"/>
        <AccountCards title="Valorant Account"/>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
