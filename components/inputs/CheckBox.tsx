import React, { FC, ReactNode, useState } from "react";

interface Props {
  label?: string;
  labelClass?: string;
  inputClass?: string;
  textClass?: string;
  id?: string;
  name: string;
  rule?: object;
  children?: ReactNode;
  filter?:boolean;
}

export const CheckBox: FC<Props> = ({
  label,
  labelClass,
  inputClass,
  textClass,
  name,
  rule,
  children,
  filter,
  id,
}) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <label className={`flex ml-5 mb-[5px] cursor-pointer ${isActive ? "!text-dark" : "!text-storm-gray"} ${filter && "filter-inputs"} ${labelClass}`} htmlFor={name}>
      <input type="checkbox" id={id} className={`${inputClass} rounded-[4px] mr-[5px] border-[0.5px] border-primary`} {...rule} onClick={() => setIsActive(!isActive)} />
      {children}
      <div className={`${textClass}`}>{label}</div>
    </label>
  );
};

export default CheckBox;
