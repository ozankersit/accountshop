import React, { FC } from "react";

export const WhyUs: FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full bg-primary md:mt-[150px] mt-[70px] overflow-x-auto scroll-center snap-x">
        <div className="text-white text-head-bold why-us-title mt-[63px] mb-[35px]">
          Why Us?
        </div>
        <div className="flex flex-row gap-[15px] mb-[100px]">
          <div className="h-[317px] w-[317px] bg-light-blue rounded-[7px]">
            <p className="text-white text-head-bold max-w-[230px] ml-[42px] mt-[30px]">
              Instant Delivery
            </p>
            <p className="text-white text-normal mx-[42px] mt-[15px]">
              As soon as you purchase an account, 'Username, Password, Blue
              Essence, Costumes' information is instantly displayed on your user
              panel.
            </p>
          </div>
          <div className="h-[317px] w-[317px] bg-light-blue rounded-[7px]">
            <p className="text-white text-head-bold max-w-[230px] ml-[42px] mt-[30px]">
              Costume Selection
            </p>
            <p className="text-white text-normal mx-[42px] mt-[15px]">
              Before purchasing the account, you can view the blue essence and
              costumes in the account's loot from the costume list and purchase
              the account you want.
            </p>
          </div>
          <div className="h-[317px] w-[317px] bg-light-blue rounded-[7px]">
            <p className="text-white text-head-bold max-w-[230px] ml-[42px] mt-[30px]">
              Without Ban Risk
            </p>
            <p className="text-white text-normal mx-[42px] mt-[15px]">
              Feel free to climb to the top leagues with accounts with high KDA.
            </p>
          </div>
          <div className="h-[317px] w-[317px] bg-light-blue rounded-[7px]">
            <p className="text-white text-head-bold max-w-[230px] ml-[42px] mt-[30px]">
              League Opportunity
            </p>
            <p className="text-white text-normal mx-[42px] mt-[15px]">
              Before purchasing the account, you can view the blue essence and
              costumes in the account's loot from the costume list and purchase
              the account you want.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
