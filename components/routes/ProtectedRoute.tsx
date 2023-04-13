import { useAuth } from "../../context/AuthContext";
import Custom404 from "../../pages/404";


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return <div>{user.uid ? children : <Custom404/>}</div>;
};

export default ProtectedRoute;