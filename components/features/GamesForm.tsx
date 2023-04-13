import React, { FC } from "react";
import ControllerIcon from "../Icons/ControllerIcon";
import CheckBox from "../inputs/CheckBox";

export const GamesForm: FC = () => {
  return (
    <>
      <div className="flex mb-2.5">
        <ControllerIcon />
        <span className="text-dark text-normal-bold pl-[5px]">Games</span>
      </div>
      <CheckBox
        name="lolFilter"
        label="League of Legends"
        labelClass="text-normal"
        inputClass=""
        textClass=""
        filter
        id="lolFilter"
      />
      <CheckBox
        name="valoFilter"
        label="Valorant"
        labelClass="text-normal"
        inputClass=""
        filter
        id="valoFilter"
      />
    </>
  );
};

export default GamesForm;
