import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import ControllerIcon from "../components/Icons/ControllerIcon";
import GemIcon from "../components/Icons/GemIcon";
import BronzeIcon from "../components/Icons/LeagueIcons/BronzeIcon";
import ChallIcon from "../components/Icons/LeagueIcons/ChallIcon";
import DiamondIcon from "../components/Icons/LeagueIcons/DiamondIcon";
import GoldIcon from "../components/Icons/LeagueIcons/GoldIcon";
import IronIcon from "../components/Icons/LeagueIcons/IronIcon";
import MasterIcon from "../components/Icons/LeagueIcons/MasterIcon";
import PlatIcon from "../components/Icons/LeagueIcons/PlatIcon";
import SilverIcon from "../components/Icons/LeagueIcons/SilverIcon";
import UnrankedIcon from "../components/Icons/LeagueIcons/UnrankedIcon";
import PaletteIcon from "../components/Icons/PaletteIcon";
import PiggyIcon from "../components/Icons/PiggyIcon";
import TrophyIcon from "../components/Icons/TrophyIcon";
import WorldIcon from "../components/Icons/WorldIcon";
import CheckBox from "../components/inputs/CheckBox";
import TextBox from "../components/inputs/TextBox";

export const Accounts: FC = () => {
  const { register } = useForm();
  return (
    <>
      <div className="flex justify-center items-center mt-[50px]">
        <div className="flex flex-col bg-white rounded-[7px] w-[341px] mb-[50px]">
          <div className="text-navy-blue text-title pb-[15px] pl-[25px] pt-[25px]">Filter</div>
          <div className="flex flex-col border-t border-light-gray pt-[15px] pl-[25px]">
            <form>
              <div className="flex mb-2.5">
                <ControllerIcon />
                <span className="text-dark text-normal-bold pl-[5px]">
                  Games
                </span>
              </div>
              <div className="flex flex-col">
              <CheckBox
                    name="lolFilter"
                    label="League of Legends"
                    labelClass="text-normal"
                    inputClass="mr-[5px]"          
                  />
                <CheckBox
                    name="valoFilter"
                    label="Valorant"
                    labelClass="text-normal"
                    inputClass="mr-[5px]"          
                  />
                <div className="flex mt-[15px] mb-2.5">
                  <WorldIcon />
                  <span className="text-dark text-normal-bold pl-[5px]">
                    Server
                  </span>
                </div>
                <CheckBox
                  name="naServer"
                  label="North America"
                  labelClass="text-normal"
                  inputClass="mr-[5px]"
                />
                <CheckBox
                  name="euServer"
                  label="Europe West"
                  labelClass="text-normal"
                  inputClass="mr-[5px]"
                />
                <CheckBox
                  name="euneServer"
                  label="Europe Nordic East"
                  labelClass="text-normal"
                  inputClass="mr-[5px]"
                />
                <CheckBox
                  name="oceServer"
                  label="Oceania"
                  labelClass="text-normal"
                  inputClass="mr-[5px]"
                />
                <CheckBox
                  name="ruServer"
                  label="Russia"
                  labelClass="text-normal"
                  inputClass="mr-[5px]"
                />
                <CheckBox
                  name="trServer"
                  label="Turkey"
                  labelClass="text-normal"
                  inputClass="mr-[5px]"
                />
                <CheckBox
                  name="lanServer"
                  label="Latin America North"
                  labelClass="text-normal"
                  inputClass="mr-[5px]"
                />
                <CheckBox
                  name="lasServer"
                  label="Latin American South"
                  labelClass="text-normal"
                  inputClass="mr-[5px]"
                />
                <CheckBox
                  name="brServer"
                  label="Brazil"
                  labelClass="text-normal"
                  inputClass="mr-[5px]"
                />
                <CheckBox
                  name="japServer"
                  label="Japan"
                  labelClass="text-normal"
                  inputClass="mr-[5px]"
                />
                <div className="flex mt-[15px] mb-2.5">
                  <TrophyIcon />
                  <span className="text-dark text-normal-bold pl-[5px]">
                    Ranks
                  </span>
                </div>
                <CheckBox
                  name="unranked"
                  label="Unranked"
                  labelClass="text-normal"
                  textClass="ml-[5px]"
                  inputClass="mr-[5px]"
                >
                  <UnrankedIcon />
                </CheckBox>
                <CheckBox
                  name="iron"
                  label="Iron"
                  labelClass="text-normal"
                  textClass="ml-[5px]"
                  inputClass="mr-[5px]"
                >
                  <IronIcon />
                </CheckBox>
                <CheckBox
                  name="bronz"
                  label="Bronz"
                  labelClass="text-normal"
                  textClass="ml-[5px]"
                  inputClass="mr-[5px]"
                >
                  <BronzeIcon />
                </CheckBox>
                <CheckBox
                  name="silver"
                  label="Silver"
                  labelClass="text-normal"
                  textClass="ml-[5px]"
                  inputClass="mr-[5px]"
                >
                  <SilverIcon />
                </CheckBox>
                <CheckBox
                  name="gold"
                  label="Gold"
                  labelClass="text-normal"
                  textClass="ml-[5px]"
                  inputClass="mr-[5px]"
                >
                  <GoldIcon />
                </CheckBox>
                <CheckBox
                  name="plat"
                  label="Plat"
                  labelClass="text-normal"
                  textClass="ml-[5px]"
                  inputClass="mr-[5px]"
                >
                  <PlatIcon />
                </CheckBox>
                <CheckBox
                  name="diamond"
                  label="Diamond"
                  labelClass="text-normal"
                  textClass="ml-[5px]"
                  inputClass="mr-[5px]"
                >
                  <DiamondIcon />
                </CheckBox>
                <CheckBox
                  name="master"
                  label="Master"
                  labelClass="text-normal"
                  textClass="ml-[5px]"
                  inputClass="mr-[5px]"
                >
                  <MasterIcon />
                </CheckBox>
                <CheckBox
                  name="grandmaster"
                  label="Grandmaster"
                  labelClass="text-normal"
                  textClass="ml-[5px]"
                  inputClass="mr-[5px]"
                >
                  <MasterIcon />
                </CheckBox>
                <CheckBox
                  name="challenger"
                  label="Challenger"
                  labelClass="text-normal"
                  textClass="ml-[5px]"
                  inputClass="mr-[5px]"
                >
                  <ChallIcon />
                </CheckBox>
                <div className="flex mt-[15px]">
                  <GemIcon />
                  <span className="text-dark text-normal-bold pl-[5px] mb-2.5">
                    Champions
                  </span>
                </div>
                <TextBox
                  type={"text"}
                  placeholder={"Number of Champion"}
                  containerClass={
                    "ml-5"
                  }
                  inputClass={"bg-concrete !w-[80%] !text-normal !py-2.5 !pl-2.5"}
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
                  containerClass={
                    "ml-5"
                  }
                  inputClass={"bg-concrete !w-[80%] !text-normal !py-2.5 !pl-2.5"}
                  name="numberOfSkin"
                  rule={{
                    ...register("numberOfSkin"),
                  }}
                />
                <div className="flex my-[15px]">
                  <PiggyIcon />
                  <span className="text-dark text-normal-bold pl-[5px]">
                    Price
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accounts;
