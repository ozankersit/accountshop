import ProtectedRoute from "../../../components/routes/ProtectedRoute"
import ProfileLeftMenu from "../ProfileLeftMenu"
import ProfileRightMenu from "../ProfileRightMenu"

const ChangePassword = () => {
  return (
    <ProtectedRoute>
      <ProfileLeftMenu>
        <ProfileRightMenu menuTitle="Change Password">
        </ProfileRightMenu>
      </ProfileLeftMenu>
    </ProtectedRoute>
  )
}

export default ChangePassword