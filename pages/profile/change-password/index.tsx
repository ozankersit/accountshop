import ProtectedRoute from "../../../components/routes/ProtectedRoute"
import ProfileLeftMenu from "../ProfileLeftMenu"
import ProfileRightMenu from "../ProfileRightMenu"
import ChangeForm from "./ChangeForm"

const ChangePassword = () => {
  return (
    <ProtectedRoute>
      <ProfileLeftMenu>
        <ProfileRightMenu menuTitle="Change Password">
          <ChangeForm/>
        </ProfileRightMenu>
      </ProfileLeftMenu>
    </ProtectedRoute>
  )
}

export default ChangePassword