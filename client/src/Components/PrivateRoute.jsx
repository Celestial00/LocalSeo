import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ children }) => {
  const user = Cookies.get("user");
  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
