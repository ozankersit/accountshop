import ProtectedRoute from "../../components/routes/ProtectedRoute";
import ProfileLeftMenu from "./ProfileLeftMenu";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <ProfileLeftMenu>
        <div className="pl-[50px] max-w-xs rounded-md">
          <div>
            <span>Profile Details</span>
          </div>
        </div>
      </ProfileLeftMenu>
    </ProtectedRoute>
  );
};

export default Dashboard;
