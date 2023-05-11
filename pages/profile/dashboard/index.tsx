import ProtectedRoute from "../../../components/routes/ProtectedRoute";
import ProfileLeftMenu from "../ProfileLeftMenu";
import ProfileRightMenu from "../ProfileRightMenu";
import DashboardForm from "./DashboardForm";


const Dashboard = () => {
  return (
    <ProtectedRoute>
      <ProfileLeftMenu>
        <ProfileRightMenu menuTitle="Profile Details">
          <DashboardForm/>
        </ProfileRightMenu>
      </ProfileLeftMenu>
    </ProtectedRoute>
  );
};

export default Dashboard;
