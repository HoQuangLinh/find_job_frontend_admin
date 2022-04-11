import React, { useState, useEffect } from "react";

import "./Sidebar.css";
import sidebar from "../../assets/data/sidebar.json";
import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";

import axios from "axios";
const Sidebar = () => {
  const [user, setUser] = useState([]);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className="sidebar">
      <img style={{ width: "100%", height: "150px" }} alt="" />

      {sidebar.map((item, index) => {
        return (
          <Link
            to={{
              pathname: item.route,
              state: { user },
            }}
          >
            <SidebarItem
              onClick={() => {
                setCurrentTabIndex(index);
              }}
              active={index === currentTabIndex}
              icon={item.icon}
              title={item.display_name}
            ></SidebarItem>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
