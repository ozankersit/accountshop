import React, { FC } from "react";
import ControllerIcon from "./Icons/ControllerIcon";
import WorldIcon from "./Icons/WorldIcon";
import CheckBox from "./inputs/CheckBox";

export const ServerForm: FC = () => {
  return (
    <>
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
                  inputClass=""
                />
                <CheckBox
                  name="euServer"
                  label="Europe West"
                  labelClass="text-normal"
                  inputClass=""
                />
                <CheckBox
                  name="euneServer"
                  label="Europe Nordic East"
                  labelClass="text-normal"
                  inputClass=""
                />
                <CheckBox
                  name="oceServer"
                  label="Oceania"
                  labelClass="text-normal"
                  inputClass=""
                />
                <CheckBox
                  name="ruServer"
                  label="Russia"
                  labelClass="text-normal"
                  inputClass=""
                />
                <CheckBox
                  name="trServer"
                  label="Turkey"
                  labelClass="text-normal"
                  inputClass=""
                />
                <CheckBox
                  name="lanServer"
                  label="Latin America North"
                  labelClass="text-normal"
                  inputClass=""
                />
                <CheckBox
                  name="lasServer"
                  label="Latin American South"
                  labelClass="text-normal"
                  inputClass=""
                />
                <CheckBox
                  name="brServer"
                  label="Brazil"
                  labelClass="text-normal"
                  inputClass=""
                />
                <CheckBox
                  name="japServer"
                  label="Japan"
                  labelClass="text-normal"
                  inputClass=""
                />
    </>
  );
};

export default ServerForm;
