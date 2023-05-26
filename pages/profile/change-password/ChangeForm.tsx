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

  return <Button onClick={ChangePassword}>Change Password</Button>;
};

export default ChangeForm;
