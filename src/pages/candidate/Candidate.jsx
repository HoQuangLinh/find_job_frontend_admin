import React, { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "./Candidate.css";
import Checkbox from "@mui/material/Checkbox";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

import { styled } from "@mui/system";

const Candidate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(1);
  const [orders, setOrders] = useState([]);
  const [originOrders, setOriginOrders] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const pages = [];

  for (let i = 2; i <= Math.ceil(orders.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const currentOrders = orders.slice(
    currentPage * itemsPerPage - itemsPerPage,
    currentPage * itemsPerPage
  );
  const renderPageNumbers = pages.map((number) => {
    if (number <= maxPageNumberLimit && number >= minPageNumberLimit) {
      return (
        <div
          onClick={() => {
            setCurrentPage(number);
          }}
          class={`cell ${currentPage === number ? "active" : null}`}
        >
          {number}
        </div>
      );
    }
    return null;
  });

  const formateDate = (dateStr) => {
    var date = new Date(dateStr);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const handlePreviousPagination = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage - 1 < minPageNumberLimit) {
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNextPagination = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    }
  };

  return (
    <div>
      <div className="row order-container">
        <div className="col-3 order-card-list">
          <div className="order-card">
            <h4 className="order-card-heading">Tìm kiếm</h4>
            <div className="order-card-body">
              <div className="order-card-item">
                <input
                  placeholder="Theo mã hoá đơn"
                  type="text"
                  className="order-card-input"
                />
              </div>
              <div className="order-card-item">
                <input
                  placeholder="Theo tên khách hàng"
                  type="text"
                  className="order-card-input"
                />
              </div>
              <div className="order-card-item">
                <input
                  placeholder="Theo tên người bán"
                  type="text"
                  className="order-card-input"
                />
              </div>
            </div>
          </div>
          <div className="order-card">
            <h4 className="order-card-heading">Thời gian</h4>
            <div className="order-card-body">
              <div className="order-card-date-picker">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    inputFormat="dd/MM/yyyy"
                    views={["day", "month", "year"]}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    label={fromDate ? "" : "Từ ngày"}
                    value={fromDate}
                    onChange={(newValue) => {
                      setFromDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        InputLabelProps={{
                          shrink: false,
                        }}
                        {...params}
                        variant="standard"
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
              <div className="order-card-date-picker">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    minDate={fromDate}
                    inputFormat="dd/MM/yyyy"
                    views={["day", "month", "year"]}
                    label={toDate ? "" : "Đến ngày"}
                    value={toDate}
                    onChange={(newValue) => {
                      setToDate(newValue);
                    }}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    renderInput={(params) => (
                      <TextField
                        InputLabelProps={{
                          shrink: false,
                        }}
                        {...params}
                        variant="standard"
                        size="small"
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9" style={{ padding: "10px 0px 10px 10px" }}>
          <div class="my-table-container">
            <table id="my-table">
              <thead>
                <tr>
                  <th>Mã ứng viên</th>
                  <th>Họ tên</th>
                  <th>Địa chỉ</th>
                  <th>Số điện thoại</th>
                  <th>Ngày đăng kí</th>
                  <th>Số công ty nộp đơn</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((order, index) => {
                  return (
                    <tr>
                      <td>1sss</td>
                      <td>sksksks</td>
                      <td>ssssss</td>
                      <td>ssss</td>
                      <td>sssaase</td>
                      <td>ABCXYZZZ</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/**Start Pagination */}
            {pages.length >= 1 && (
              <div class="pagination">
                <div class="pagination-left">
                  <button
                    disabled={currentPage === 1 ? true : false}
                    onClick={handlePreviousPagination}
                    class="cell"
                    id="prev-btn"
                  >
                    <i class="fas fa-caret-left"></i>
                  </button>
                  <div
                    onClick={() => {
                      setCurrentPage(1);
                      setminPageNumberLimit(1);
                      setmaxPageNumberLimit(pageNumberLimit);
                    }}
                    className={`cell ${currentPage === 1 ? "active" : ""}`}
                  >
                    1
                  </div>
                  {minPageNumberLimit > 1 && (
                    <div onClick={handlePreviousPagination} class="cell">
                      {" "}
                      &hellip;
                    </div>
                  )}

                  {renderPageNumbers}

                  {maxPageNumberLimit < pages.length && (
                    <div onClick={handleNextPagination} class="cell">
                      {" "}
                      &hellip;
                    </div>
                  )}

                  <button
                    disabled={
                      currentPage === pages[pages.length - 1] ? true : false
                    }
                    onClick={handleNextPagination}
                    class="cell"
                    id="next-btn"
                  >
                    <i class="fas fa-caret-right"></i>
                  </button>
                </div>
                <div class="pagination-right">
                  <p>Số hàng mỗi dòng: {itemsPerPage} / Tổng số hoá đơn</p>
                </div>
              </div>
            )}
            {/**Pagination */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
