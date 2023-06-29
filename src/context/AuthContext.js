import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState(null);

  const setUserDetail = (userDetail) => {
    setLoggedin(true);
    if (userDetail) {
      console.log("setting user dteails");
      // localStorage.setItem("token", JSON.stringify(userDetail.encodedToken));
      localStorage.setItem("user", JSON.stringify({ ...user, ...userDetail }));
      setUser((detail) => {
        return { ...detail, ...userDetail };
      });
    }
  };
  const logoutUser = () => {
    setUser(null);
    setLoggedin(false);
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedin,
        logoutUser,
        setUserDetail,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
