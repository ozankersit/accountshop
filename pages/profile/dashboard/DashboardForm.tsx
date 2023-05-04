import { useForm } from "react-hook-form";
import TextBox from "../../../components/inputs/TextBox";
import { getAuth, updateProfile } from "firebase/auth";
import Button from "../../../components/features/Button";
import { useAuth } from "../../../context/AuthContext";

interface IProps {
    displayName: string;
}

const DashboardForm = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<any>();

  const { updateUser } = useAuth();

  const onSubmit = async (data:IProps) => {
    try {
    await updateUser(data.displayName);
    console.log("form: ",data)
    } catch{
        console.log(errors.message)
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextBox
        type={"text"}
        label="Name"
        placeholder={"Name"}
        containerClass={"flex items-center"}
        name="displayName"
        error={errors?.displayName}
        rule={{
          ...register("displayName")
        }}
      />
      {/* <TextBox
        type={"text"}
        label="Email"
        disabled
        placeholder={"example@gmail.com"}
        containerClass={"flex items-center"}
        name="email"
        error={errors?.email}
        rule={{
          ...register("email", {
            // required: "Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid Email here",
            },
          }),
        }}
      />
      <TextBox
        type={"number"}
        label="Number"
        placeholder={"Phone Number"}
        containerClass={"flex items-center"}
        name="phoneNumber"
        error={errors?.phoneNumber}
        rule={{
          ...register("phoneNumber", {
            // required: "E-mail is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid phone number here",
            },
          }),
        }}
      />
      <TextBox
        type={"text"}
        label="Discord"
        placeholder={"Discord Tag"}
        containerClass={"flex items-center"}
        name="discord"
        error={errors?.discord}
        rule={{
          ...register("discord", {
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid discord number here",
            },
          }),
        }}
      /> */}
      <Button
        type="submit"
        color="#0038FF"
        radius="7px"
      >
       <span className="text-white">Save Changes</span>
      </Button>
    </form>
  );
};

export default DashboardForm;
