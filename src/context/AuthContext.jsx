import { createContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export const AuthContext = createContext();

const IS_USER_LOGIN = "isUserLogin";
const SS_USER_DATA = "userData";

const AuthProvider = ({ children }) => {
  const sessionUserData =
    JSON.parse(sessionStorage.getItem(SS_USER_DATA)) || {};

  const [isUserAuth, setIsUserAuth] = useState(
    sessionStorage.getItem(IS_USER_LOGIN) === "true"
  );

  const [userData, setUserData] = useState(sessionUserData);

  const userLoginHandler = () => setIsUserAuth(true);
  const logoutHandler = () => setIsUserAuth(false);

  const setUserDataHandler = (data) => setUserData(data);

  useEffect(() => {
    sessionStorage.setItem(IS_USER_LOGIN, isUserAuth);
  }, [isUserAuth]);

  useEffect(() => {
    sessionStorage.setItem(SS_USER_DATA, JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    if (!isUserAuth) {
      setUserData({});
    }
  }, [isUserAuth]);

  return (
    <AuthContext.Provider
      value={{
        isUserAuth,
        userLoginHandler,
        logoutHandler,
        userData,
        setUserDataHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default AuthProvider;
