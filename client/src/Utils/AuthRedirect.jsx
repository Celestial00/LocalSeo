import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthRedirect = ({ children }) => {
  const user = Cookies.get("user");
  return user ? <Navigate to="/" /> : children;
};

export default AuthRedirect;