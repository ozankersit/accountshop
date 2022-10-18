import React,{FC} from 'react'
import TextBox from '../components/inputs/TextBox'
import {useForm} from 'react-hook-form';
import Button from '../components/Button';

export const Login:FC = () => {
    const {
        formState: {errors},
        handleSubmit,
        register,
    } = useForm<any>();
  return (
    <div className='bg-concrete h-screen flex justify-center items-center'>
    <form onSubmit={handleSubmit()}>
        <TextBox
              type={"email"}
              placeholder={"Email"}
              containerClass={"w-full flex items-center"}
              inputClass={"w-[500px]"}
              name="email"
              error={errors?.email}
              rule={{
                ...register('email', {
                  required: "E-mail is required",
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid e-mail here"
                  }
                })
              }}
        />
        <TextBox
            //   type={""} pw lerde type kullanmıyoruz
              placeholder={"Password"}
              containerClass={"w-full flex items-center"}
              inputClass={"w-[500px]"}
              name="password"
              error={errors?.password}
              showHideIcon={true}
              rule={{
                ...register('password', {
                  required: "Password is required",
                })
              }}
        />
        <Button type='submit' color='#0038FF' width='500px' radius='7px' className='py-2.5 pl-5 pr-2.5 text-white'>
          Log in
        </Button>
    </form>
    </div>
  )
}

export default Login