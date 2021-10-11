import { useContext } from "react";
import { AuthContext } from "../contex/Authprodiver";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
