import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
function Privateroute({ children }) {
  const { isLoggedin } = useContext(AuthContext);
  return <>{isLoggedin ? <>{children}</> : <Navigate to="/login" />}</>;
}

export default Privateroute;
