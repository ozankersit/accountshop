import React, { FC } from "react";
import DiscordIcon from "../components/Icons/DiscordIcon";
import InstagramIcon from "../components/Icons/InstagramIcon";
import LoginForm from "../components/features/LoginForm";
import RightContent from "../components/ui/RightContent";

export const Login: FC = () => {
  return (
    <div className="bg-concrete flex flex-row md:justify-between justify-center items-center h-screen">
      <LoginForm/>
      <RightContent className="bg-[url('/asheBg.png')]">
        <div className="text-white text-4xl-bold ml-[90px] mb-[27px] max-w-[475px]">Welcome Back Rise now!</div>
        <div className="ml-[90px] flex gap-[43px] mb-[110px]"><InstagramIcon/><DiscordIcon/></div>
      </RightContent>
    </div>
  );
};

export default Login;
