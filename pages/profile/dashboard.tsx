import ProtectedRoute from '../../components/routes/ProtectedRoute'
import ProfileLeftMenu from './ProfileLeftMenu';
import { getAuth } from "firebase/auth";

const Dashboard = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
  
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
    console.log(email)
  }
 
  return (
    <ProtectedRoute>
    <ProfileLeftMenu>
      <div className='pl-[50px] max-w-xs rounded-md'>
        <div>
          <span>Profile Details</span>
        </div>
      </div>
    </ProfileLeftMenu>
    </ProtectedRoute>
    
  )
}

export default Dashboard