import ProtectedRoute from "../../../components/routes/ProtectedRoute"
import ProfileLeftMenu from "../ProfileLeftMenu"
import ProfileRightMenu from "../ProfileRightMenu"
import EmailForm from "./EmailForm"


const ChangeEmail = () => {
  return (
    <ProtectedRoute>
      <ProfileLeftMenu>
        <ProfileRightMenu menuTitle="Change Email">
          <EmailForm/>
        </ProfileRightMenu>
      </ProfileLeftMenu>
    </ProtectedRoute>
  )
}

export default ChangeEmail