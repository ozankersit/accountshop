import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import GamesForm from "./GamesForm";
import ExpandIcon from "../Icons/ExpandIcon";
import GemIcon from "../Icons/GemIcon";
import PaletteIcon from "../Icons/PaletteIcon";
import PiggyIcon from "../Icons/PiggyIcon";
import TextBox from "../inputs/TextBox";
import RanksForm from "./RanksForm";
import ServerForm from "./ServerForm";

export const FilterSection: FC = () => {
  const { register } = useForm();
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="flex flex-col bg-white rounded-[7px] md:w-[341px] w-[300px] mb-[50px]">
        <div className="flex justify-between text-navy-blue text-title pb-[15px] pl-[25px] pt-[25px]">
          <span>Filter</span>
          <div
            className="md:hidden block mr-6"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <ExpandIcon className={`${isActive ? "rotate-90 duration-500" : "rotate-0 duration-500"}`} />
          </div>
        </div>
        <div
          className={`flex flex-col border-t border-light-gray pt-[15px] px-[25px] transition-all duration-500 ${isActive ? "hidden transition-all duration-500" : "block transition-all duration-500"}`}>
          <form>
            <div className="flex flex-col">
              <GamesForm />
              <ServerForm />
              <RanksForm />
              <div className="flex mt-[15px]">
                <GemIcon />
                <span className="text-dark text-normal-bold pl-[5px] mb-2.5">
                  Champions
                </span>
              </div>
              <TextBox
                type={"text"}
                placeholder={"Number of Champion"}
                containerClass={"ml-5"}
                inputClass={"bg-concrete !w-[92%] !text-normal !py-2.5 !pl-2.5"}
                name="numberOfChampion"
                rule={{
                  ...register("numberOfChampion"),
                }}
              />
              <div className="flex mt-[15px]">
                <PaletteIcon />
                <span className="text-dark text-normal-bold pl-[5px] mb-2.5">
                  Skins
                </span>
              </div>
              <TextBox
                type={"text"}
                placeholder={"Number of Skin"}
                containerClass={"ml-5"}
                inputClass={"bg-concrete !w-[92%] !text-normal !py-2.5 !pl-2.5"}
                name="numberOfSkin"
                rule={{
                  ...register("numberOfSkin"),
                }}
              />
              <div className="flex flex-col my-[15px]">
                <div className="flex">
                  <PiggyIcon />
                  <span className="text-dark text-normal-bold pl-[5px]">
                    Price
                  </span>
                </div>
                <div className="flex flex-row mt-[15px] ml-4 mr-[26px]">
                  <TextBox
                    placeholder={"Min Price"}
                    name={"minPrice"}
                    type={"number"}
                    containerClass="mr-[6px]"
                    inputClass="!border !border-solid border-gray !p-2.5 !text-normal focus:outline-none focus:border-[#3158FF] focus:ring-1 focus:ring-[#3158FF]"
                    rule={{
                      ...register("minPrice"),
                    }}
                  />
                  <TextBox
                    placeholder={"Max Price"}
                    name={"maxPrice"}
                    type={"number"}
                    inputClass="!border !border-solid border-gray !p-2.5 !text-normal focus:outline-none focus:border-[#3158FF] focus:ring-1 focus:ring-[#3158FF] invalid:text-navy-blue"
                    rule={{
                      ...register("maxPrice"),
                    }}
                  />
                </div>
              </div>
              <div className="mr-auto ml-auto mb-[5px]">
                <Button
                  type="submit"
                  color="#0038FF"
                  radius="7px"
                  className="text-normal text-white p-2.5 md:w-[289px] w-full"
                >
                  Filter
                </Button>
              </div>
              <div className="mr-auto ml-auto mb-[26px]">
                <Button
                  type="reset"
                  color="#ffffff"
                  radius="7px"
                  className="text-normal text-black p-2.5"
                >
                  <span className="border-b">Reset filter</span>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
