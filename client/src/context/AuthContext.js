import React, { createContext, useState, useEffect, useMemo } from 'react';

const AuthUserContext = createContext();

const AuthUserProvider = ({ children }) => {
  const [AuthUser, setAuthUser] = useState(null);

  useEffect(() => {
    const storedAuthUser = JSON.parse(localStorage.getItem('AuthUser'));
    if (storedAuthUser) {
      setAuthUser(storedAuthUser);
    }
  }, []);

  useEffect(() => {
    if (AuthUser) {
      localStorage.setItem('AuthUser', JSON.stringify(AuthUser));
    } else {
      localStorage.removeItem('AuthUser'); 
    }
  }, [AuthUser]);

  const userMemo = useMemo(() => ({ AuthUser, setAuthUser }), [AuthUser, setAuthUser]);

  return (
    <AuthUserContext.Provider value={userMemo}>
      {children}
    </AuthUserContext.Provider>
  );
};

export { AuthUserProvider, AuthUserContext };
