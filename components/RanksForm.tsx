import React, { FC } from "react";
import BronzeIcon from "./Icons/league-icons/BronzeIcon";
import ChallengerIcon from "./Icons/league-icons/ChallengerIcon";
import DiamondIcon from "./Icons/league-icons/DiamondIcon";
import GoldIcon from "./Icons/league-icons/GoldIcon";
import IronIcon from "./Icons/league-icons/IronIcon";
import MasterIcon from "./Icons/league-icons/MasterIcon";
import PlatIcon from "./Icons/league-icons/PlatIcon";
import SilverIcon from "./Icons/league-icons/SilverIcon";
import UnrankedIcon from "./Icons/league-icons/UnrankedIcon";
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
                  labelClass="text-normal unranked-inputs"
                  textClass="ml-[5px]"
                  inputClass="!border-[#6B6963]"
                  filter
                  id="unranked"
                >
                  <UnrankedIcon />
                </CheckBox>
                <CheckBox
                  name="iron"
                  label="Iron"
                  labelClass="text-normal iron-inputs"
                  textClass="ml-[5px]"
                  inputClass="!border-[#51484A]"
                  filter
                  id="iron"
                >
                  <IronIcon />
                </CheckBox>
                <CheckBox
                  name="bronz"
                  label="Bronz"
                  labelClass="text-normal bronz-inputs"
                  textClass="ml-[5px]"
                  inputClass="!border-[#8C513A]"
                  filter
                  id="bronz"
                >
                  <BronzeIcon />
                </CheckBox>
                <CheckBox
                  name="silver"
                  label="Silver"
                  labelClass="text-normal silver-inputs"
                  textClass="ml-[5px]"
                  inputClass="!border-[#80989D]"
                  filter
                  id="silver"
                >
                  <SilverIcon />
                </CheckBox>
                <CheckBox
                  name="gold"
                  label="Gold"
                  labelClass="text-normal gold-inputs"
                  textClass="ml-[5px]"
                  inputClass="!border-[#CD8837]"
                  filter
                  id="gold"
                >
                  <GoldIcon />
                </CheckBox>
                <CheckBox
                  name="plat"
                  label="Plat"
                  labelClass="text-normal plat-inputs"
                  textClass="ml-[5px]"
                  inputClass="!border-[#4E9996]"
                  filter
                  id="plat"
                >
                  <PlatIcon />
                </CheckBox>
                <CheckBox
                  name="diamond"
                  label="Diamond"
                  labelClass="text-normal diamond-inputs"
                  textClass="ml-[5px]"
                  inputClass="!border-[#576BCE]"
                  filter
                  id="diamond"
                >
                  <DiamondIcon />
                </CheckBox>
                <CheckBox
                  name="master"
                  label="Master"
                  labelClass="text-normal master-inputs"
                  textClass="ml-[5px]"
                  inputClass="!border-[#9D48E0]"
                  filter
                  id="master"
                >
                  <MasterIcon />
                </CheckBox>
                <CheckBox
                  name="grandmaster"
                  label="Grandmaster"
                  labelClass="text-normal grand-master-inputs"
                  textClass="ml-[5px]"
                  inputClass="!border-[#CD4545] checked:bg-[#CD4545]"
                  filter
                  id="grandmaster"
                >
                  <MasterIcon />
                </CheckBox>
                <CheckBox
                  name="challenger"
                  label="Challenger"
                  labelClass="text-normal challenger-inputs"
                  textClass="ml-[5px]"
                  inputClass="!border-[#F4C874] checked:bg-[#F4C874]"
                  filter
                  id="challenger"
                >
                  <ChallengerIcon />
                </CheckBox>
    </>
  );
};

export default RanksForm;
