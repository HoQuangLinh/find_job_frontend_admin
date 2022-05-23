import React from "react";
import companyImg1 from "../../../assets/images/company-page/company1.png";
import companyImg2 from "../../../assets/images/company-page/company2.png";
import companyImg3 from "../../../assets/images/company-page/company3.png";
import companyImg4 from "../../../assets/images/company-page/company4.png";
import "./EmployerCard.css";
const EmployerCard = (props) => {
  const company = [companyImg1, companyImg2, companyImg3, companyImg4];
  return (
    <div {...props}>
      <div className="company-item card">
        <img src={companyImg1} alt="" />
        <div className="company-item-content">
          <p className="company-item-content-company">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            assumenda in. Asperiores porro et molestias sunt consectetur, id non
            eum est minus mollitia accusantium perferendis ea sapiente molestiae
            reprehenderit earum?
          </p>
          <p className="company-item-content-career">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            corrupti amet iure officiis magnam perferendis, iusto quae magni,
            totam distinctio ipsum debitis provident illum quos quidem qui cum
            inventore. Quo.
          </p>
          <p className="company-item-content-address">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ex
            consequuntur in iusto voluptatum. Molestiae beatae fugiat saepe
            excepturi delectus itaque accusantium, sapiente ab maxime
            voluptatibus aspernatur reprehenderit perspiciatis possimus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployerCard;
