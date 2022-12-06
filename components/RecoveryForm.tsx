import Link from "next/link";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import HeaderLogoIcon from "./common/Header/HeaderIcons/HeaderLogoIcon";
import TextBox from "./inputs/TextBox";
import { ToastContainer, toast } from "react-toastify";

const RecoveryForm: FC = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();
  const notify = () => toast("Wow so easy!");
  return (
    <>
      <form className="mr-auto ml-auto sm:block flex flex-col items-center">
        <div className="md:mb-[30px] mb-5">
          <Link href={"/"}>
            <HeaderLogoIcon />
          </Link>
        </div>
        <div className="sm:max-w-[515px] max-w-[315px] text-storm-gray sm:text-title text-small">
        After entering your email, you can quickly change your password by clicking the link in your mailbox.
        </div>
        <TextBox
          type={"text"}
          placeholder={"Email"}
          containerClass={
            "sm:w-[500px] w-[300px] flex items-center md:mb-[30px] mb-[15px] md:mt-[15px] mt-2.5"
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
        <Button
        type="submit"
        color="#0038FF"
        radius="7px"
        >
            <div className="text-white py-2.5 pl-5 pr-2.5 sm:w-[500px] w-[300px]">Send</div>
        </Button>
      </form>
    </>
  );
};

export default RecoveryForm;
