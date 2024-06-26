import React, { FC } from "react";
import Link from "next/link";
import GoogleIcon from "../Icons/GoogleIcon";
import HeaderLogoIcon from "../common/Header/HeaderIcons/HeaderLogoIcon";
import Button from "./Button";
import TextBox from "../inputs/TextBox";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

interface IProps {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<any>();

  const { signIn } = useAuth();
  const router = useRouter();

  const onSubmit = async (data: IProps) => {
    try {
      await signIn(data.email, data.password);
      console.log(data);
      router.push("/");
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
        containerClass={"sm:w-[500px] w-[300px] flex items-center mb-[15px]"}
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
          "sm:w-[500px] w-[300px] flex items-center mb-[30px] justify-end"
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
      <Button
        type="submit"
        color="#0038FF"
        radius="7px"
        className="py-2.5 pl-5 pr-2.5 text-white sm:w-[500px] w-[300px]"
      >
        Log in
      </Button>
      <Link href={"/recovery"}>
        <div className="text-center text-normal mt-[15px] cursor-pointer underline underline-offset-4	">
          Forgot Password
        </div>
      </Link>
      <div className="text-center text-title text-storm-gray mt-[30px] flex items-center justify-center dotted-line whitespace-nowrap">
        or continue with
      </div>
      <div className="cursor-pointer flex bg-white rounded-[7px] py-2.5 pr-2.5 pl-5 mt-[30px] sm:w-[500px] w-[300px] sm:mr-0 mr-5">
        <GoogleIcon />
        <span
          onClick={onGoogleClick}
          className="ml-2.5 text-title text-storm-gray"
        >
          Sign in with Google
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
