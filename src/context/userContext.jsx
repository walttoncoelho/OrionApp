import React, { createContext, useEffect, useState } from 'react';


export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storageUser = localStorage.getItem('user');

    if (storageUser) {
      setUser(JSON.parse(storageUser));
    }
  }, []);


  return (
    <UserContext.Provider value={ { user, setUser } }>
      {children}
    </UserContext.Provider>
  );
};

