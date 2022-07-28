import React, { useState, useEffect, useCallback, useMemo } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: async (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();

  const remainingDuration = expirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken = null;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  console.log("userislogedin : -" + userIsLoggedIn);

  const logoutHandler = useCallback(() => {
    setToken(null);
    setUserIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    localStorage.setItem("token", token);

    const nowTime = new Date().getTime();
    const exptime = nowTime + expirationTime;
    const remainingTime = calculateRemainingTime(exptime);
    localStorage.setItem("expirationTime", exptime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);

    setToken(token);
    setUserIsLoggedIn(true);
  };

  useEffect(() => {
    if (tokenData) {
      setToken(tokenData.token);
      setUserIsLoggedIn(true);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = useMemo(
    () => ({
      token: token,
      isLoggedIn: userIsLoggedIn,
      login: loginHandler,
      logout: logoutHandler,
    }),
    [token, userIsLoggedIn]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
