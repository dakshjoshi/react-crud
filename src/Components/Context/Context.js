import React, { createContext, useState } from "react";

export const Context = createContext();

export const UserProvider = (props) => {
  const [users, setUser] = useState([
    { id: `LmN095`, name: `User 1` },
    { id: `Zyw65U`, name: `User 2` },
    { id: `Mn0stUv`, name: `User 3` },
  ]);

  return (
    <Context.Provider value={[users, setUser]}>
      {props.children}
    </Context.Provider>
  );
};
