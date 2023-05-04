import { useForm } from "react-hook-form";
import TextBox from "../../../components/inputs/TextBox";
import { getAuth, updatePhoneNumber } from "firebase/auth";
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

  const onSubmit = async (data: IProps) => {
    try {
      await updateUser(data.displayName);
      console.log("form: ", data);
    } catch {
      console.log(errors.message);
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-[50px]">
      <TextBox
        type={"text"}
        label="Name"
        inputClass="!border-[1px] !border-solid !p-2.5 !border-gray placeholder:text-storm-gray placeholder:text-normal"
        placeholder={`${user?.displayName}`}
        labelClass="p-5 !pl-0"
        containerClass={"flex items-center gap-5"}
        name="displayName"
        error={errors?.displayName}
        rule={{
          ...register("displayName", {
            required: "Name is required",
          }),
        }}
      />
      <TextBox
        type={"text"}
        label="Email"
        disabled
        placeholder={`${user?.email}`}
        labelClass="p-5 !pl-0"
        inputClass="!border-[1px] !border-solid !p-2.5 !border-gray placeholder:text-storm-gray placeholder:text-normal"
        containerClass={"flex items-center gap-5"}
        name="email"
      />
      <TextBox
        type={"number"}
        label="Number"
        disabled
        placeholder={"Phone Number"}
        labelClass="p-5 !pl-0"
        inputClass="!border-[1px] !border-solid !p-2.5 !border-gray placeholder:text-storm-gray placeholder:text-normal"
        containerClass={"flex items-center gap-5"}
        name="phoneNumber"
        error={errors?.phoneNumber}
        rule={{
          ...register("phoneNumber", {}),
        }}
      />
      {/*<TextBox
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
      <Button type="submit" color="#0038FF" radius="7px">
        <span className="text-white">Save Changes</span>
      </Button>
    </form>
  );
};

export default DashboardForm;
