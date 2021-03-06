import React, { useState, useEffect } from "react";
import Calendar from "../../components/calendar/Calendar";
import Combobox from "../../components/combobox/Combobox";
import "./Dashboard.css";
import logo from "../../assets/images/icon.png";
import axios from "axios";
import { LineChart } from "../../components/linechart/LineChart";
const Dashboard = () => {
  const [today, setToday] = useState(new Date());
  const [totalCustomerThisWeek, setTotalCustomerThisWeek] = useState();
  const [totalCustomerLastWeek, setTotalCustomerLastWeek] = useState();
  const [dataTest, setDataTest] = useState(Array.from(Array(8).keys()));
  console.log(dataTest);
  //get customer this week
  useEffect(() => {
    axios
      .get(
        "https://clothesapp123.herokuapp.com/api/orders/revenue/getTotalCustomerByThisWeek"
      )
      .then((res) => {
        const customerThisWeekDataSets = [0, 0, 0, 0, 0, 0, 0];
        // console.log({ customerThisWeekDataSets });
        res.data.forEach((item) => {
          // console.log(item);
          const indexDate = new Date(item.dateOrder).getDay();
          if (indexDate !== 0) {
            customerThisWeekDataSets[indexDate - 1] += 1;
          } else {
            customerThisWeekDataSets[6] += 1;
          }
        });
        setTotalCustomerThisWeek((prev) => {
          return [...customerThisWeekDataSets];
        });
      });
  }, []);

  //console.log({ totalCustomerThisWeek });
  //get customer last week
  useEffect(() => {
    axios
      .get(
        "https://clothesapp123.herokuapp.com/api/orders/revenue/getTotalCustomerByLastWeek"
      )
      .then((res) => {
        const customerLastWeekDataSets = [0, 0, 0, 0, 0, 0, 0];
        res.data.forEach((item) => {
          const indexDate = new Date(item.dateOrder).getDay();
          if (indexDate !== 0) {
            customerLastWeekDataSets[indexDate - 1] += 1;
          } else {
            customerLastWeekDataSets[6] += 1;
          }
        });
        setTotalCustomerLastWeek((prev) => {
          return [...customerLastWeekDataSets];
        });
      });
  }, []);
  const dataCustomer = {
    labels: [
      "Th??? hai",
      "Th??? ba",
      "Th??? t??",
      "Th??? n??m",
      "Th??? s??u",
      "Th??? b???y",
      "Ch??? nh???t",
    ],
    datasets: [
      {
        label: "Tu???n tr?????c",
        data: totalCustomerLastWeek,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Tu???n n??y",
        data: totalCustomerThisWeek,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <div className="dashboard-calendar">
          <div className="date">
            {`Ng??y ${today.getDate().toString().padStart(2, 0)} th??ng ${(
              today.getMonth() + 1
            )
              .toString()
              .padStart(2, 0)} n??m  ${today.getFullYear()}`}
          </div>
          <Calendar />
        </div>
        <div className="dashboard-review">
          <div className="dashboard-anncouce">
            <h3>8 th??ng b??o tu???n n??y</h3>
          </div>
          {dataTest.map(() => {
            return (
              <div className="card dashboard-review-item">
                <div className="dashboard_review_title">
                  <h3>????ng k?? ????ng b??i</h3>
                  <div className="btn_hide">Hide</div>
                </div>
                <div className="dashboard_review_date">
                  Ng??y ????ng k??: 23/04/2022
                </div>
                <div className="dashboard_review_company">
                  <div className="dashboard_review_company_col">
                    <img src={logo} alt="" />
                    <h4>Fpt Company</h4>
                  </div>
                  <div className="dashboard_review_company_col">
                    <div className="dashboard_review_cancel">Cancel</div>
                    <div className="dashboard_review_confirm">Confirm</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="dashboard-right">
        <div className="dashboard-chart">
          <div className="dashboard-chart-header">
            <h3 className="title-header">S??? kh??ch gh?? mua</h3>
          </div>
          <div className="dashboard-chart-body">
            <LineChart data={dataCustomer} />
          </div>
        </div>
        <div className="chart">Chart</div>
      </div>
    </div>
  );
};

export default Dashboard;
