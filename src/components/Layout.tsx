import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
