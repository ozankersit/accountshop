import Link from "next/link";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import HeaderLogoIcon from "../common/Header/HeaderIcons/HeaderLogoIcon";
import TextBox from "../inputs/TextBox";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import router from "next/router";
import Modal from 'react-modal';
import CheckIcon from "../Icons/CheckIcon";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '7px',
    width: '30%',
    height:'275px',
    border: 'none',
    z: '99',
    overflow: 'auto',
    padding: '',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
  },
}

const RecoveryForm: FC = () => {
  const [email, setEmail] = useState();
  const [showModal,setShowModal] = useState(false)

  const getEmail: string = email || "";

  const ChangePassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, getEmail)
      .then(() => {
        // Password reset email sent!
        // ..
        setShowModal(true)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handleChange = (event:any) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div className="mr-auto ml-auto sm:block flex flex-col items-center">
        <div className="md:mb-[30px] mb-5">
          <Link href={"/"}>
            <a>
              <HeaderLogoIcon />
            </a>
          </Link>
        </div>
        <div className="sm:max-w-[515px] max-w-[315px] text-storm-gray sm:text-title text-small">
          After entering your email, you can quickly change your password by
          clicking the link in your mailbox.
        </div>
        <TextBox
          type={"text"}
          placeholder={"Email"}
          containerClass={
            "sm:w-[500px] w-[300px] flex items-center md:mb-[30px] mb-[15px] md:mt-[15px] mt-2.5"
          }
          name="email"
          onChange={handleChange}
        />
        <Modal
        isOpen={showModal}
        onRequestClose={() => {setShowModal(false)}}
        style={customStyles}
        overlayClassName="modal-overlay"
        >
          <div className="flex flex-col justify-center items-center">
            <CheckIcon/>
            <span className="text-dark text-title">Check Your Email</span>
          </div>
        </Modal>
        <Button
          type="submit"
          color="#0038FF"
          onClick={ChangePassword}
          radius="7px"
        >
          <div className="text-white py-2.5 pl-5 pr-2.5 sm:w-[500px] w-[300px] transition-all">
            Send
          </div>
        </Button>
      </div>
    </>
  );
};

export default RecoveryForm;
