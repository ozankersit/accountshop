import React, { FC, ReactNode, useState } from "react";

interface Props {
  label?: string;
  labelClass?: string;
  inputClass?: string;
  textClass?: string;
  name: string;
  rule?: object;
  children?: ReactNode;
}

export const CheckBox: FC<Props> = ({
  label,
  labelClass,
  inputClass,
  textClass,
  name,
  rule,
  children,
}) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <label className={`flex ml-5 mb-[5px] ${isActive ? "!text-dark" : "!text-storm-gray"} ${labelClass}`} htmlFor={name}>
      <input type="checkbox" className={`${inputClass}`} {...rule} onClick={() => setIsActive(!isActive)} />
      {children}
      <div className={`${textClass}`}>{label}</div>
    </label>
  );
};

export default CheckBox;
