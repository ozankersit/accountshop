import React, { FC } from "react";
import FilterSection from "../components/features/FilterSection";

export const Accounts: FC = () => {
  return (
    <div className="md:h-auto h-screen">
      <div className="flex justify-center mt-[50px]">
        <FilterSection />
      </div>
    </div>
  );
};

export default Accounts;
