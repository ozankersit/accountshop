import React, {FC, useState} from "react";
import classNames from "classnames";
import ShowPassword from "../ShowPassword";


interface Props {
  error?: any,
  name: string,
  label?: string,
  placeholder: string,
  rule?: object,
  showHideIcon?: boolean,
  icon?: React.SVGProps<SVGSVGElement>,
  containerClass?: string,
  labelClass?: string,
  inputClass?: string,
  errorClass?: string,
  type?: string,
  disabled?: boolean,
}

export const TextBox: FC<Props> = ({
                                     error, name, label, placeholder, rule, showHideIcon = false,
                                     containerClass, type, labelClass = '', inputClass, disabled, icon, errorClass
                                   }) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      {error && (
        <span className={`${errorClass ? errorClass : ''}`}>
        {error?.message}
        </span>
      )}
      <div className={containerClass}>
        <label
          className={`text-black ${labelClass}`}
          htmlFor={name}>{label}</label>
        
        <input
          className={classNames(`w-full border-none rounded-[7px] text-title text-storm-gray py-[15px] pl-5 pr-[15px] ${inputClass}`, {
            '': error
          })}
          autoComplete="off"
          placeholder={placeholder}
          id={name}
          name={name}
          type={type || showPassword ? 'text' : 'password'} // || yerine && koyarsak type tutmadığımız için hiç sorgulamadan koşula girmez
          disabled={disabled}
          {...rule}
        />
        <>
          {showHideIcon && <ShowPassword showPassword={showPassword} setShowPassword={setShowPassword}/>}
          {icon && icon}
        </>
      </div>
    </>
  );
}


export default TextBox;
