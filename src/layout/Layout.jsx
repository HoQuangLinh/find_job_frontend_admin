import React, { useState } from "react";
import NavBar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./Layout.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesLayout from "../navigations/RoutesLayout";

const Layout = () => {
  const [rerender, setRerender] = useState(false);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <Router>
      <Sidebar />
      <div className="layout__content">
        <div className="layout__content-routes">
          <RoutesLayout />
        </div>
      </div>
    </Router>
  );
};

export default Layout;
