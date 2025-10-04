import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import "../Root.css";
const Root = () => {
  return (
    <div className="flex flex-col space-y-8 items-center justify-center h-screen  text-4xl text-pink-400">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
