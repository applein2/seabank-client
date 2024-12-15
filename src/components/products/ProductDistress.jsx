import React from "react";
import { AiOutlineProduct } from "react-icons/ai";

const ProductDistress = () => {
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
            <h1 className="h1 detailheading">스마트 조난알리미</h1>
            <h4 className="h4">Smart Distress Alert Device</h4>
          </div>
        </div>

        <p className="detaildesc">
          해상 조난사고로 인한 인명피해를 막기 위해서는 조난사고가 발생하더라도
          구조 불능 상태에 빠지지 않도록 조난자의 위치를 실시간으로 파악할 수
          있어야 합니다. 이를 위해 나온 장비가 씨뱅크의 조난신호장비,
          '조난알리미' 입니다.
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
          <li>입수 상황 발생 시 자동으로 위치 발신</li>
          <li>작동 후 12~24시간 위치 발신 가능, USB-C 타입 충전</li>
          <li>
            안정적인 KT-LTE 통신망을 사용하여 ​오차 10m 이내 위치 파악 가능
          </li>
          <li>넓은 커버리지로 국내 해상 넓은 범위에서 활용 가능</li>
          <li>IP 67 등급 방수방진</li>
          <li>
            조난 발생 시 알람, 조난 발생 이력 및 현황 파악 가능 / 웹, 모바일에서
            확인 가능
          </li>
        </ul>
      </div>
      <div className="products-img">
        <div>
          <img src="./images/products/productDistress1.png" alt="" />
        </div>
        <div>
          <img src="./images/products/productDistress2.png" alt="" />
        </div>
        <div>
          <img src="./images/products/productDistress3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductDistress;
