import ProtectedRoute from "../../../components/routes/ProtectedRoute";
import ProfileLeftMenu from "../ProfileLeftMenu";
import DashboardForm from "./DashboardForm";


const Dashboard = () => {
  return (
    <ProtectedRoute>
      <ProfileLeftMenu>
        <div className="pl-[50px] rounded-[7px] pt-[70px]  flex flex-col">
          <div>
            <span>Profile Details</span>
            <hr className="text-storm-gray mr-10 lg:block hidden w-[1242px]"/>
          </div>
          <DashboardForm/>
        </div>
      </ProfileLeftMenu>
    </ProtectedRoute>
  );
};

export default Dashboard;
