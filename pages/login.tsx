import React, { FC } from "react";
import DiscordIcon from "../components/Icons/DiscordIcon";
import InstagramIcon from "../components/Icons/InstagramIcon";
import LoginForm from "../components/LoginForm";

export const Login: FC = () => {
  return (
    <div className="bg-concrete flex flex-row md:justify-between justify-center items-center h-screen">
      <LoginForm/>
      <div className="bg-[url('/asheBg.png')] h-screen w-1/2 bg-no-repeat md:flex hidden flex-col justify-end">
        <div className="text-white text-4xl-bold ml-[90px] mb-[27px] max-w-[475px]">Welcome Back Rise now!</div>
        <div className="ml-[90px] flex gap-[43px] mb-[110px]"><InstagramIcon/><DiscordIcon/></div>
      </div>
    </div>
  );
};

export default Login;
