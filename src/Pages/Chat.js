import React, { useContext } from "react";
import NavBar from "../Components/NavBar";
import AppHeader from "../Components/AppHeader";
import { UserContext } from "../Provider/UserProvider"; // Update the path

const Chat = () => {
  const { isAdmin } = useContext(UserContext);

  return (
    <div>
      <AppHeader isAdmin={isAdmin}>
        <NavBar />
        <h1 className="text-5xl text-center font-bold">{`Chat`}</h1>
      </AppHeader>
    </div>
  );
};

export default Chat;
