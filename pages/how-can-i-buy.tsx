import Link from "next/link";
import React from "react";
import Button from "../components/features/Button";
import BuyPhaseIcon from "../components/Icons/BuyPhaseIcon";
import ConfirmationIcon from "../components/Icons/ConfirmationIcon";
import FilterPrototypeIcon from "../components/Icons/FilterPrototypeIcon";
import ListPrototypeIcon from "../components/Icons/ListPrototypeIcon";
import SignUpIcon from "../components/Icons/SignUpIcon";

const HowCanIBuy = () => {
  return (
    <>
      <div className="md:mt-[157px] mt-[50px]">
        <div className="flex flex-row justify-center items-center flex-wrap md:mb-[125px] mb-[40px]">
          <div className="flex flex-col">
            <div className="md:ml-0 ml-5">
              <span className="text-head text-primary">Step 1: </span>
              <span className="text-primary text-head-bold whitespace-nowrap">
                Sign Up Phase
              </span>
            </div>
            <p className="text-storm-gray text-title max-w-[478px] md:mt-[11px] mt-[15px] md:mb-[40px] mb-[15px] md:px-0 px-5">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate"
            </p>
            <Link href="/register">
              <button className="bg-blue-button rounded-[7px] p-2.5 w-[200px] h-[50px] sm:block hidden text-title">
                Sign Up
              </button>
            </Link>
          </div>
          <div className="sign-up-svg md:px-0 px-5">
            <SignUpIcon />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center flex-wrap md:mb-[125px] mb-[40px]">
          <div className="2xl:block hidden">
            <FilterPrototypeIcon />
          </div>
          <div className="flex flex-col md:ml-[30px] ml-0">
            <div className="md:ml-0 ml-5">
              <span className="text-head text-primary">Step 2: </span>
              <span className="text-primary text-head-bold whitespace-nowrap">
                Filter ACC
              </span>
            </div>
            <p className="text-storm-gray text-title max-w-[760px] md:mt-[11px] mt-[15px] md:mb-[40px] mb-[15px] md:px-0 px-5">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate"
            </p>
            <div className="2xl:block hidden">
              <ListPrototypeIcon />
            </div>
            <div className="2xl:hidden flex justify-center items-center">
              <img src="/browsePrototype.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center flex-wrap md:mb-[125px] mb-[40px]">
          <img
            src="/accountInfoPrototype.png"
            alt=""
            className="2xl:block hidden"
          />
          <div className="flex flex-col md:ml-[30px] ml-0">
            <div className="md:ml-0 ml-5">
              <span className="text-head text-primary">Step 3: </span>
              <span className="text-primary text-head-bold whitespace-nowrap">
                View Account Detail
              </span>
            </div>
            <p className="text-storm-gray text-title max-w-[478px] md:mt-[11px] mt-[15px] md:mb-[40px] mb-[15px] md:px-0 px-5">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate"
            </p>
            <img
              src="accountInfoMobilePrototype.png"
              alt=""
              className="2xl:hidden block mt-5 ml-5 mr-5"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center flex-wrap md:mb-[125px] mb-[40px]">
          <div className="2xl:block hidden">
            <BuyPhaseIcon />
          </div>
          <div className="flex flex-col md:ml-[30px] ml-0">
            <div className="md:ml-0 ml-5">
              <span className="text-head text-primary">Step 4: </span>
              <span className="text-primary text-head-bold whitespace-nowrap">
                Buy Phase
              </span>
            </div>
            <p className="text-storm-gray text-title max-w-[760px] md:mt-[11px] mt-[15px] md:mb-[40px] mb-[15px] md:px-0 px-5">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate"
            </p>
            <div className="confirmation-phase md:hidden mt-5 ml-5 mr-5 flex justify-center">
              <BuyPhaseIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center flex-wrap md:mb-[125px] mb-[40px]">
          <div className="flex flex-col md:ml-[30px] ml-0">
            <div className="md:ml-0 ml-5">
              <span className="text-head text-primary">Step 5: </span>
              <span className="text-primary text-head-bold whitespace-nowrap">
                Buy Confirmation Page
              </span>
            </div>
            <p className="text-storm-gray text-title max-w-[1257px] md:mt-[11px] mt-[15px] md:mb-[40px] mb-[15px] md:px-0 px-5">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate"
            </p>
            <div className="confirmation-phase mt-5 ml-5 mr-5 flex justify-center">
              <ConfirmationIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowCanIBuy;
