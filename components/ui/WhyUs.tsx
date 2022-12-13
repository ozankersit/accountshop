import React, { FC } from "react";

export const WhyUs: FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full bg-primary md:mt-[150px] mt-[70px] overflow-x-auto scroll-center snap-x">
        <div className="text-white text-head-bold why-us-title mt-[63px] mb-[35px]">
          Why Us?
        </div>
        <div className="flex flex-row mb-[100px] w-full md:justify-center">
          <div className="md:h-[317px] h-auto w-[317px] bg-light-blue rounded-[7px] mx-5">
            <p className="text-white text-head-bold max-w-[230px] md:ml-[42px] ml-5 mt-[30px] md:mr-auto mr-24">
              Instant Delivery
            </p>
            <p className="text-white text-normal md:mx-[42px] mx-5 md:mt-[15px] mt-2.5">
              As soon as you purchase an account, 'Username, Password, Blue
              Essence, Costumes' information is instantly displayed on your user
              panel.
            </p>
          </div>
          <div className="md:h-[317px] h-auto w-[317px] bg-light-blue rounded-[7px] mr-5">
            <p className="text-white text-head-bold max-w-[230px] md:ml-[42px] ml-5 mt-[30px] md:mr-auto mr-24">
              Costume Selection
            </p>
            <p className="text-white text-normal md:mx-[42px] mx-5 md:mt-[15px] mt-2.5">
              Before purchasing the account, you can view the blue essence and
              costumes in the account's loot from the costume list and purchase
              the account you want.
            </p>
          </div>
          <div className="md:h-[317px] h-auto w-[317px] bg-light-blue rounded-[7px] mr-5">
            <p className="text-white text-head-bold max-w-[230px] md:ml-[42px] ml-5 mt-[30px] md:mr-auto mr-24">
              Without Ban Risk
            </p>
            <p className="text-white text-normal md:mx-[42px] mx-5 md:mt-[15px] mt-2.5">
              Feel free to climb to the top leagues with accounts with high KDA.
            </p>
          </div>
          <div className="md:h-[317px] h-auto w-[317px] bg-light-blue rounded-[7px]">
            <p className="text-white text-head-bold max-w-[230px] md:ml-[42px] ml-5 mt-[30px] md:mr-auto mr-24">
              League Opportunity
            </p>
            <p className="text-white text-normal md:mx-[42px] mx-5 md:mt-[15px] mt-2.5">
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
