import React from "react";
import { Heading } from "./Heading";
import { UserList } from "./UserList";
import { UserProvider } from "./Context/Context";
// import { AddUser } from "./AddUser";

export const Home = () => {
  return (
    <div>
      <Heading></Heading>
      <UserList>HOME</UserList>

      <h1></h1>
    </div>
  );
};
