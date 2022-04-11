import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import axios from "axios";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__left">
          <i class="bx bx-menu"></i>
          <p></p>
        </div>

        <div className="navbar__right">
          <Link>
            <div className="navbar__right-item">
              <span>Linh</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
