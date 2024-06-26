import Button from "../../../components/features/Button";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase/firebaseInIt";

const ChangeForm = () => {
  const user = auth.currentUser;
  const email: string = user?.email || "";

  const ChangePassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        alert("mail sent");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="p-12 flex justify-center items-center">
    <Button type="submit" color="#0038FF" radius="7px" className="py-2.5 px-6 mb-12" onClick={ChangePassword}> <span className="text-white">Change Password</span> </Button>

    </div>
  ) 
};

export default ChangeForm;
