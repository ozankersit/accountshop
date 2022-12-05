import React, { FC } from "react";
import DiscordIcon from "../components/Icons/DiscordIcon";
import InstagramIcon from "../components/Icons/InstagramIcon";
import LoginForm from "../components/LoginForm";
import LeftContent from "../components/ui/LeftContent";

export const Login: FC = () => {
  return (
    <div className="bg-concrete flex flex-row md:justify-between justify-center items-center h-screen">
      <LoginForm/>
      <LeftContent className="bg-[url('/asheBg.png')]">
        <div className="text-white text-4xl-bold ml-[90px] mb-[27px] max-w-[475px]">Welcome Back Rise now!</div>
        <div className="ml-[90px] flex gap-[43px] mb-[110px]"><InstagramIcon/><DiscordIcon/></div>
      </LeftContent>
    </div>
  );
};

export default Login;
