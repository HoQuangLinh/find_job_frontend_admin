import { getThemeProps } from "@mui/system";
import React from "react";
import "./Search.css";
const Search = (props) => {
  return (
    <div className="navbar__search">
      <input {...props} type="text" placeholder="Nhập tên công ty" />
      <i className="bx bx-search"></i>
    </div>
  );
};

export default Search;
