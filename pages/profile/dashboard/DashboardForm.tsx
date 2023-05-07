import { useForm } from "react-hook-form";
import TextBox from "../../../components/inputs/TextBox";
import { getAuth, updatePhoneNumber } from "firebase/auth";
import Button from "../../../components/features/Button";
import { useAuth } from "../../../context/AuthContext";
import SaveIcon from "../../../components/Icons/SaveIcon";

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
        type="text"
        name="displayName"
        placeholder={`${user?.displayName}`}
        label="Name"
        containerClass="flex items-center gap-12 mb-5"
        inputClass="!border-[1px] !border-solid !w-auto !p-2.5 !border-gray placeholder:text-storm-gray placeholder:text-normal"
        error={errors?.displayName}
        rule={{
          ...register("displayName", { required: "Name is required" }),
        }}
      />
      <TextBox
        type="text"
        name="username"
        placeholder="Username"
        disabled
        showLockIcon
        label="Username"
        containerClass="flex items-center gap-4 mb-5 relative"
        inputClass="!border-[1px] !border-solid !w-auto !p-2.5 !border-gray placeholder:text-storm-gray placeholder:text-normal"
        error={errors?.username}
        // rule={{
        //   ...register("username", { required: "Username is required" }),
        // }}
      />
      <TextBox
      type="text"
      name="email"
      label="Email"
      placeholder={`${user?.email}`}
      disabled
      showLockIcon
      labelClass="mr-[52px]"
      containerClass={"flex items-center mb-5 relative"}
      inputClass="!border-[1px] !border-solid !w-auto !p-2.5 !border-gray placeholder:text-storm-gray placeholder:text-normal"
      />
      <TextBox
      type="tel"
      name="phoneNumber"
      label="Number"
      placeholder="Phone Number"
      containerClass={"flex items-center gap-[30px] mb-5"}
      inputClass="!border-[1px] !border-solid !w-auto !p-2.5 !border-gray placeholder:text-storm-gray placeholder:text-normal"
      rule={{
        ...register("phoneNumber", {
          // required: "phoneNumber is required",
          pattern: {
            value:
              /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
            message: "Please enter a valid phone number here",
          },
        }),
      }}
      />
      <TextBox
        type="text"
        name="address"
        placeholder="Address"
        label="Address"
        containerClass="flex items-center gap-7 mb-5"
        inputClass="!border-[1px] !border-solid !w-auto !p-2.5 !border-gray placeholder:text-storm-gray placeholder:text-normal"
        error={errors?.adress}
        rule={{
          ...register("adress"),
        }}
      />
      <TextBox
        type="text"
        name="country"
        placeholder="Select a Country..."
        label="Country"
        containerClass="flex items-center gap-7 mb-5"
        inputClass="!border-[1px] !border-solid !w-auto !p-2.5 !border-gray placeholder:text-storm-gray placeholder:text-normal"
        error={errors?.country}
        rule={{
          ...register("country"),
        }}
      />
      <TextBox
        type="text"
        name="discord"
        placeholder="Discord Tag"
        label="Discord"
        containerClass="flex items-center gap-7 mb-14"
        inputClass="!border-[1px] !border-solid !w-auto !p-2.5 !border-gray placeholder:text-storm-gray placeholder:text-normal"
        error={errors?.discord}
        rule={{
          ...register("discord"),
        }}
      />
      <Button type="submit" color="#0038FF" radius="7px" className="py-2.5 px-6 mb-10">
        <div className="flex items-center gap-[5px]">
          <SaveIcon/>
        <span className="text-white">Save Changes</span>
        </div>
      </Button>
    </form>
  );
};

export default DashboardForm;
