import React,{FC} from 'react'
import Link from "next/link";
import GoogleIcon from './Icons/GoogleIcon';
import HeaderLogoIcon from './common/Header/HeaderIcons/HeaderLogoIcon';
import Button from './Button';
import TextBox from './inputs/TextBox';
import { useForm } from 'react-hook-form';
import { Login as LoginModel } from '../models/AuthModels/login.model';
import { useRouter } from 'next/router';
import { loginGetToken, loginRefreshToken } from '../services/auth';
import { AxiosResponse } from 'axios';
import { LoginResponse } from '../models/AuthModels/response/login.response';

export const LoginForm:FC = () => {
    const {
        formState: { errors },
        handleSubmit,
        register,
      } = useForm<LoginModel>();
    
      const router = useRouter();
    
      const onSubmit = async (data:LoginModel) => {
        await loginGetToken(data).then(res => {
          loginRefreshToken(res.data).then((res:AxiosResponse<LoginResponse>) => {
          // login(res).then(() => getAccount().then(() => router.push("/")))
          // login(res).then(()=> router.push("/"))
          })
        })
      };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mr-auto ml-auto sm:block flex flex-col items-center">
        <div className="mb-[50px]">
          <Link href={"/"}>
          <HeaderLogoIcon />
          </Link>
        </div>
        <TextBox
          type={"text"}
          placeholder={"Email or Username"}
          containerClass={"sm:w-[500px] w-[300px] flex items-center mb-[15px]"}
          name="username"
          error={errors?.username}
          rule={{
            ...register("username", {
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
          containerClass={"sm:w-[500px] w-[300px] flex items-center mb-[30px] justify-end"}
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
        <div className="flex bg-white rounded-[7px] py-2.5 pr-2.5 pl-5 mt-[30px] sm:w-[500px] w-[300px] sm:mr-0 mr-5">
          <GoogleIcon />
          <span className="ml-2.5 text-title text-storm-gray">
            Sign in with Google
          </span>
        </div>
      </form>
  )
}

export default LoginForm