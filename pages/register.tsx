import React, { FC } from "react";
import TextBox from "../components/inputs/TextBox";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import GoogleIcon from "../components/Icons/GoogleIcon";
import HeaderLogoIcon from "../components/common/Header/HeaderIcons/HeaderLogoIcon";
import DiscordIcon from "../components/Icons/DiscordIcon";
import InstagramIcon from "../components/Icons/InstagramIcon";

export const Register: FC = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<any>();
  return (
    <div className="bg-concrete flex flex-row md:justify-between justify-center items-center h-screen">
      <form onSubmit={handleSubmit()} className="mr-auto ml-auto sm:block flex flex-col items-center">
        <div className="mb-[50px]">
          <Link href={"/"}>
          <HeaderLogoIcon />
          </Link>
        </div>
        <TextBox
          type={"email"}
          placeholder={"Email"}
          containerClass={"sm:w-[500px] w-[300px] flex items-center mb-[15px]"}
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
          containerClass={"sm:w-[500px] w-[300px] flex items-center mb-[15px] sm:justify-end justify-start"}
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
        <TextBox
          //   type={""} pw lerde type kullanmıyoruz
          placeholder={"Retry Password"}
          containerClass={"sm:w-[500px] w-[300px] flex items-center mb-[30px] sm:justify-end justify-start"}
          // inputClass={"w-[500px]"}
          name="rePassword"
          error={errors?.rePassword}
          showHideIcon={true}
          rule={{
            ...register("rePassword", {
              required: "Password is required",
              validate: (value) => {
                if(watch('password') !== value) {
                    return ("Password does not match");
                }
              }
            }),
          }}
        />
        <Button
          type="submit"
          color="#0038FF"
          // width="500px"
          radius="7px"
          className="py-2.5 pl-5 pr-2.5 text-white sm:w-[500px] w-[300px]"
        >
          Create Account
        </Button>
        <div className="text-center text-title text-dark mt-[30px] flex items-center justify-center dotted-line whitespace-nowrap">
          Or
        </div>
        <div className="flex bg-white rounded-[7px] py-2.5 pr-2.5 pl-5 mt-[30px] sm:w-[500px] w-[300px] sm:mr-0 mr-5">
          <GoogleIcon />
          <span className="ml-2.5 text-title text-storm-gray">
            Sign up with Google
          </span>
        </div>
      </form>
      <div className="bg-[url('/shenBg.png')] h-screen w-1/2 bg-no-repeat md:flex hidden flex-col justify-end">
        <div className="text-white text-4xl-bold ml-[90px] mb-[27px] max-w-[720px]">Don't have an account, create it now
</div>
        <div className="ml-[90px] flex gap-[43px] mb-[110px]"><InstagramIcon/><DiscordIcon/></div>
      </div>
    </div>
  );
};

export default Register;
