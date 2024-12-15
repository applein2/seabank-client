import React from "react";
import { AiOutlineProduct } from "react-icons/ai";

const ProductFlipFarm = () => {
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
            <h1 className="h1 detailheading">ESS 해상 양식 작업선</h1>
            <h4 className="h4">ESS Aquaculture Vessels</h4>
          </div>
        </div>

        <p className="detaildesc">
        새로운 ESS 양식 작업선은 태양열 에너지를 전기 에너지로 변환, 배터리에 저장해 사용하는 메커니즘으로 작동해
        온실가스를 전혀 배출하지 않고 양식업자를 유해가스로부터 지켜줍니다. 국내 최초로 개발된 친환경·고효율 양식 작업선을 
        씨뱅크에서 만나보세요. 
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
          <li>24m x 7m 크기</li>
          <li>
            n톤 크래인 탑재 
          </li>
          <li>
            실시간 모니터링 시스템 보유 
          </li>
          <li>태양열 에너지 사용, 유류비 절감 가능</li>
          <li>패류 양식업에 사용 가능</li>
        </ul>
      </div>
      <div className="products-img">
        <div>
          <img src="./images/products/productFlipFarm1.jpg" alt="" />
        </div>
        <div>
          <img src="./images/products/productFlipFarm2.jpg" alt="" />
        </div>
        <div>
          <img src="./images/products/productFlipFarm3.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductFlipFarm;
