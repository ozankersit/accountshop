import React, { FC } from "react";
import DiscordIcon from "../components/Icons/DiscordIcon";
import InstagramIcon from "../components/Icons/InstagramIcon";
import RegisterForm from "../components/features/RegisterForm";
import RightContent from "../components/ui/RightContent";

export const Register: FC = () => {
  return (
    <div className="bg-concrete flex flex-row md:justify-between justify-center items-center h-screen">
      <RegisterForm />
      <RightContent className="bg-[url('/shenBg.png')]">
        <div className="text-white text-4xl-bold ml-[90px] mb-[27px] max-w-[720px]">
          Don't have an account, create it now
        </div>
        <div className="ml-[90px] flex gap-[43px] mb-[110px]">
          <InstagramIcon />
          <DiscordIcon />
        </div>
      </RightContent>
    </div>
  );
};

export default Register;
