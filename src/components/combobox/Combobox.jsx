import { useState } from "react";
import "./Combobox.css";
function Combobox() {
  const [isActive, setIsActive] = useState(false);
  const [categoryActive, setCategoryActive] = useState("Tất cả");
  const options = [
    {
      name: "Tuần này",
    },
    {
      name: "Tháng này",
    },
    {
      name: "Năm này",
    },
  ];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <p>{categoryActive}</p>
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div
            className="dropdown-item"
            onClick={() => {
              setCategoryActive("Tất cả");
              setIsActive(false);
            }}
          >
            Tất cả
          </div>
          {options.map((option) => (
            <div
              onClick={(e) => {
                setCategoryActive(option.name);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Combobox;
