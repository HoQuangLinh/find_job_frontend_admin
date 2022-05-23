import React from "react";
import Combobox from "../../components/combobox/Combobox";
import Search from "../../components/search/Search";
import "./Employer.css";
import EmployerCard from "./employer_card/EmployerCard";
const Employer = () => {
  const companys = [];
  for (var i = 0; i < 100; i++) {
    companys.push(i);
  }
  return (
    <div>
      <div className="employer-header">
        <div className="employer-header-title">
          <h3> Danh sách công ty trong hệ thống</h3>
        </div>
        <div className="row employer-header-content">
          <Search
            onChange={() => {
              console.log("heloo");
            }}
          />
          <Combobox />

          <button className="btn">Thêm công ty</button>
        </div>
      </div>

      <div className="employer-list row">
        {companys.map(() => {
          return <EmployerCard className="col-4 employer-card" />;
        })}
      </div>
    </div>
  );
};

export default Employer;
