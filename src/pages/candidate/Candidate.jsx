import React from "react";
import "./Candidate.css";
const Candidate = () => {
  return (
    <div>
      <div
        className="row customers_navbar_container"
        style={{ alignItems: "center", fontSize: "20px" }}
      >
        <div className="navbar__search">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <i className="bx bx-search"></i>
        </div>

        <div className="list-action-customers-btn">
          <div className="action-customers-btn">
            <i class="bx bxs-file-export"></i>Xuất file
          </div>
        </div>
      </div>
      <div>
        <table id="candidates">
          <tr>
            <th>Mã số</th>
            <th>Tên</th>
            <th>Địa chỉ </th>
            <th>Số điện thoại</th>
            <th>Ngày đăng kí</th>
            <th>Số lượng apply</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>27/10/9229</td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Berglunds snabbköp</td>
            <td>Christina Berglund</td>
            <td>Sweden</td>
            <td>27/10/9229</td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
            <td>27/10/9229</td>
            <td>100</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Candidate;
