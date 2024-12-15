import React from "react";
import { AiOutlineProduct } from "react-icons/ai";

const ProductSeaStation = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <div className="title-container">
          <div className="vertical"></div>
          <div>
            <h1 className="h1 detailheading">해양환경 관측장비</h1>
            <h4 className="h4">Sea-Station</h4>
          </div>
        </div>

        <p className="detaildesc">
          스마트 양식의 핵심은 해양 데이터 입니다. 해양환경 관측장비 Sea-Station은 고객의 수요에
          맞는 해양 데이터를 수집하여 LTE 신호를 이용해 서버로 전송, 실시간으로
          모니터링이 가능하도록 하는 데이터 수집 장비입니다.
        </p>
        <div className="icon-container">
          <div className="icon">
            <AiOutlineProduct color={"#d00ee1"} size={"1.5em"} />
          </div>
          <div className="feature">
            <div>
              <h3 className="feature-title">제품특징</h3>
            </div>
          </div>
        </div>

        <ul className="detailul">
          <li>수온, 염도, pH, 용존산소량 등 다양한 해양 데이터 수집 가능</li>
          <li>내부 공간 활용으로 시험 양식 수행 가능</li>
          <li>고성능 해양 데이터 수집 센서 탑재</li>
          <li>
            특허 받은 데이터 센서 보호 기술 SAF를 탑재하여 유지보수 비용 최소화
          </li>
          <li>타사 해양 데이터 수집 장비 대비 합리적인 비용</li>
        </ul>
      </div>
      <div className="products-img">
        <div>
          <img src="./images/products/productseastation1.png" alt="" />
        </div>
        <div>
          <img src="./images/products/productseastation2.png" alt="" />
        </div>
        <div>
          <img src="./images/products/productseastation3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductSeaStation;
