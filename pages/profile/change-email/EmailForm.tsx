import Button from "../../../components/features/Button";
import { getAuth, updateEmail } from "firebase/auth";
import { auth } from "../../../firebase/firebaseInIt";

const EmailForm = () => {
  const ChangeEmail = () => {
    const user: any = auth.currentUser;
    updateEmail(user, "user@example.com")
      .then(() => {
        alert("mail changed");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="p-12 flex justify-center items-center">
      <Button
        type="submit"
        color="#0038FF"
        radius="7px"
        className="py-2.5 px-6 mb-12"
        onClick={ChangeEmail}
      >
        {" "}
        <span className="text-white">Change Email</span>{" "}
      </Button>
    </div>
  );
};

export default EmailForm;
