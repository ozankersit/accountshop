import Link from "next/link";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import HeaderLogoIcon from "../common/Header/HeaderIcons/HeaderLogoIcon";
import GoogleIcon from "../Icons/GoogleIcon";
import TextBox from "../inputs/TextBox";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

interface IProps {
  email: string;
  password: string;
  passwordConfirm: string;
}

export const RegisterForm: FC = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<any>();

  const { signUp } = useAuth();
  const router = useRouter();

  const onSubmit = async (data: IProps) => {
    try {
      await signUp(data.email, data.password);
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      router.push("/");
      //check if user email already exits
    } catch (error) {
      console.log("Could not authorize with google");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mr-auto ml-auto sm:block flex flex-col items-center"
    >
      <div className="mb-[50px]">
        <Link href={"/"}>
          <a>
            <HeaderLogoIcon />
          </a>
        </Link>
      </div>
      <TextBox
        type={"text"}
        placeholder={"Email"}
        containerClass={
          "sm:w-[500px] w-[300px] flex items-center mb-[15px] md:mt-[15px] mt-2.5"
        }
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
        placeholder={"Password"}
        containerClass={
          "sm:w-[500px] w-[300px] flex items-center mb-[15px] justify-end md:mt-[15px] mt-2.5"
        }
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
        placeholder={"Retry Password"}
        containerClass={
          "sm:w-[500px] w-[300px] flex items-center mb-[30px] justify-end md:mt-[15px] mt-2.5"
        }
        name="rePassword"
        error={errors?.rePassword}
        showHideIcon={true}
        rule={{
          ...register("rePassword", {
            required: "Retry password is required",
            validate: (value) => {
              if (watch("password") !== value) {
                return "Password does not match";
              }
            },
          }),
        }}
      />
      <Button
        type="submit"
        color="#0038FF"
        radius="7px"
        className="py-2.5 pl-5 pr-2.5 text-white sm:w-[500px] w-[300px]"
      >
        Create Account
      </Button>
      <div className="text-center text-title text-dark mt-[30px] flex items-center justify-center dotted-line whitespace-nowrap">
        Or
      </div>
      <div className="cursor-pointer flex bg-white rounded-[7px] py-2.5 pr-2.5 pl-5 mt-[30px] sm:w-[500px] w-[300px] sm:mr-0 mr-5">
        <GoogleIcon />
        <span onClick={onGoogleClick} className="ml-2.5 text-title text-storm-gray">
          Sign up with Google
        </span>
      </div>
    </form>
  );
};

export default RegisterForm;
