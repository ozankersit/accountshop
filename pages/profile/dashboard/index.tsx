import ProtectedRoute from "../../../components/routes/ProtectedRoute";
import ProfileLeftMenu from "../ProfileLeftMenu";
import DashboardForm from "./DashboardForm";


const Dashboard = () => {
  return (
    <ProtectedRoute>
      <ProfileLeftMenu>
        <div className="pl-[50px] rounded-[7px] py-[70px] pb-[111px] flex flex-col">
          <div>
            <span>Profile Details</span>
            <hr className="text-storm-gray mr-10"/>
          </div>
          <DashboardForm/>
        </div>
      </ProfileLeftMenu>
    </ProtectedRoute>
  );
};

export default Dashboard;
