import React, { FC } from "react";
import TextBox from "../components/inputs/TextBox";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import GoogleIcon from "../components/Icons/GoogleIcon";
import HeaderLogoIcon from "../components/common/Header/HeaderIcons/HeaderLogoIcon";

export const Login: FC = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<any>();
  return (
    <div className="bg-concrete flex flex-row md:justify-between justify-center items-center h-screen">
      <form onSubmit={handleSubmit()} className="mr-auto ml-auto">
        <div className="mb-[50px]"><HeaderLogoIcon/></div>
        <TextBox
          type={"email"}
          placeholder={"Email"}
          containerClass={"w-full flex items-center mb-[15px]"}
          // inputClass={"w-[500px]"}
          name="email"
          error={errors?.email}
          rule={{
            ...register("email", {
              required: "E-mail is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid e-mail here",
              },
            }),
          }}
        />
        <TextBox
          //   type={""} pw lerde type kullanmıyoruz
          placeholder={"Password"}
          containerClass={"w-full flex items-center mb-[30px] justify-end"}
          // inputClass={"w-[500px]"}
          name="password"
          error={errors?.password}
          showHideIcon={true}
          rule={{
            ...register("password", {
              required: "Password is required",
            }),
          }}
        />
        <Button
          type="submit"
          color="#0038FF"
          width="511px"
          radius="7px"
          className="py-2.5 pl-5 pr-2.5 text-white"
        >
          Log in
        </Button>
        <Link href={"/"}>
          <div className="text-center text-normal mt-[15px] cursor-pointer underline underline-offset-4	">
            Forgot Password
          </div>
        </Link>
        <div className="text-center text-title text-storm-gray mt-[30px] flex items-center justify-center dotted-line">
        or continue with
        </div>
        <div className="flex bg-white rounded-[7px] py-2.5 pr-2.5 pl-5 mt-[30px]">
          <GoogleIcon/>
          <span className="ml-2.5 text-title text-storm-gray">Sign in with Google</span>
        </div>
      </form>
      <div className="bg-[url('/asheBg.png')] h-screen w-1/2 bg-no-repeat md:block hidden"></div>
    </div>
  );
};

export default Login;
