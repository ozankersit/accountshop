import React, { FC, useState } from "react";
import classNames from "classnames";
import ShowPassword from "../features/ShowPassword";
import SearchIcon from "../Icons/SearchIcon";
import LockIcon from "../Icons/LockIcon";

interface Props {
  error?: any;
  name: string;
  label?: string;
  placeholder: string;
  rule?: object;
  showHideIcon?: boolean;
  icon?: React.SVGProps<SVGSVGElement>;
  containerClass?: string;
  labelClass?: string;
  inputClass?: string;
  errorClass?: string;
  type?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  showSearchIcon?: boolean;
  showLockIcon?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.RefObject<HTMLInputElement>;
}

export const TextBox: FC<Props> = ({
  error,
  name,
  label,
  placeholder,
  rule,
  showHideIcon = false,
  containerClass,
  type,
  labelClass = "",
  inputClass,
  disabled,
  showLockIcon,
  errorClass,
  showSearchIcon,
  onChange,
  ref,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {error && (
        <span className={`${errorClass ? errorClass : "text-red text-title"}`}>
          {error?.message}
        </span>
      )}
      <div className={containerClass}>
        <label className={`text-black ${labelClass}`} htmlFor={name}>
          {label}
        </label>

        <input
          className={classNames(
            `w-full border-none rounded-[7px] text-title text-storm-gray py-[15px] pl-5 pr-[15px] ${inputClass}`,
            {
              "": error,
            }
          )}
          autoComplete="off"
          placeholder={placeholder}
          id={name}
          name={name}
          ref={ref}
          type={type || showPassword ? "text" : "password"} // || yerine && koyarsak type tutmadığımız için hiç sorgulamadan koşula girmez
          disabled={disabled}
          onChange={onChange}
          {...rule}
        />
        <>
          {showHideIcon ? (
            <ShowPassword
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          ) : null}
          {showSearchIcon ? <SearchIcon/> : null}
          {showLockIcon ? <LockIcon className="absolute left-[360px]" /> : null}
        </>
      </div>
    </>
  );
};

export default TextBox;
