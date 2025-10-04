import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="flex flex-col space-y-8 items-center justify-center h-screen  text-6xl text-pink-400">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
