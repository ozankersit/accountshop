import React, { FC } from "react";
import FilterSection from "../components/FilterSection";
import TextBox from "../components/inputs/TextBox";

export const Accounts: FC = () => {
  return (
    <>
      <div className="flex justify-center mt-[50px]">
        <FilterSection/>
        <div className="flex flex-col ml-2.5">
          {/* <div className="bg-white flex rounded-[7px] justify-between items-center p-2.5">
            <span>0 Accounts Found</span>
            <div>
              <div>
              </div>
              <div>
                <TextBox
                name="searchAccount"
                placeholder="Search Account"
                inputClass="!p-2.5 !text-title !text-storm-gray bg-concrete"
                containerClass="bg-white mr-[30px]"
                showSearchIcon={true}
                >
                </TextBox>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Accounts;
