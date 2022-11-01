import React, { FC } from "react";
import BronzeIcon from "./Icons/LeagueIcons/BronzeIcon";
import ChallIcon from "./Icons/LeagueIcons/ChallIcon";
import DiamondIcon from "./Icons/LeagueIcons/DiamondIcon";
import GoldIcon from "./Icons/LeagueIcons/GoldIcon";
import IronIcon from "./Icons/LeagueIcons/IronIcon";
import MasterIcon from "./Icons/LeagueIcons/MasterIcon";
import PlatIcon from "./Icons/LeagueIcons/PlatIcon";
import SilverIcon from "./Icons/LeagueIcons/SilverIcon";
import UnrankedIcon from "./Icons/LeagueIcons/UnrankedIcon";
import TrophyIcon from "./Icons/TrophyIcon";
import CheckBox from "./inputs/CheckBox";

export const RanksForm: FC = () => {
  return (
    <>
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
    </>
  );
};

export default RanksForm;
