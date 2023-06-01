import ProtectedRoute from "../../../components/routes/ProtectedRoute";
import ProfileLeftMenu from "../ProfileLeftMenu";
import ProfileRightMenu from "../ProfileRightMenu";


const Support = () => {
  return (
    <ProtectedRoute>
      <ProfileLeftMenu>
        <ProfileRightMenu menuTitle="Support">
        asd
        </ProfileRightMenu>
      </ProfileLeftMenu>
    </ProtectedRoute>
  )
}

export default Support