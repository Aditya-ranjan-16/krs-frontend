import React, { useState, useEffect, useCallback, useMemo } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  user: {
    name: "",
    pic: "",
    email: ""
  },
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
  const userdata = localStorage.getItem("user");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("user");
    return null;
  }
   const finaluser=JSON.parse(userdata)
  return {
    token: storedToken,
    duration: remainingTime,
    user:finaluser

  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken = null;
  let initialuser ={};
  if (tokenData) {
    initialToken = tokenData.token;
    initialuser=tokenData.user
  }

  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState(initialuser);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  console.log("userislogedin : -" + userIsLoggedIn);

  const logoutHandler = useCallback(() => {
    setToken(null);
    setUserIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("user");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (name,email,pic,token,expirationTime) => {
    localStorage.setItem("token", token);
    const setuserdata={name:name,pic:pic,email:email}
    
    localStorage.setItem("user", JSON.stringify(setuserdata));

    const nowTime = new Date().getTime();
    const exptime = nowTime + expirationTime;
    const remainingTime = calculateRemainingTime(exptime);
    localStorage.setItem("expirationTime", exptime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
    setUser(setuserdata)
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
      user:user,
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
