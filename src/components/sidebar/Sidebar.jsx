import React, { useState, useEffect } from "react";

import "./Sidebar.css";
import sidebar from "../../assets/data/sidebar.json";
import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";
import icon from "../../assets/images/icon.png";

import axios from "axios";
const Sidebar = () => {
  const [user, setUser] = useState([]);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={icon} alt="" />
        <h3>FINDWORK</h3>
      </div>
      <div className="sidebar__profile">
        <img
          src="https://res.cloudinary.com/hoquanglinh/image/upload/v1639459232/Linh/vqrzga5ncigbvauybbyf.png"
          alt=""
        />
        <div className="sidebar__profile-detail">
          <p>Linh Hồ</p>
          <span className="sidebar__profile-detail-email">linh</span>
        </div>
      </div>

      {sidebar.map((item, index) => {
        return (
          <Link to={item.route}>
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
