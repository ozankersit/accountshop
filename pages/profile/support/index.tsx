import ProtectedRoute from "../../../components/routes/ProtectedRoute";
import ProfileLeftMenu from "../ProfileLeftMenu";
import ProfileRightMenu from "../ProfileRightMenu";
import SupportForm from "./SupportForm";


const Support = () => {
  return (
    <ProtectedRoute>
      <ProfileLeftMenu>
        <ProfileRightMenu menuTitle="Support">
        <SupportForm/>
        </ProfileRightMenu>
      </ProfileLeftMenu>
    </ProtectedRoute>
  )
}

export default Support