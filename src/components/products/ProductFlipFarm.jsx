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
            <h1 className="h1 detailheading">플립팜 개체굴 양식 시스템</h1>
            <h4 className="h4">FlipFarm System</h4>
          </div>
        </div>

        <p className="detaildesc">
          프랑스, 일본 등에서 사용하는 선진 개체굴 양식 시스템, 플립팜 시스템을
          한국에서 만나보세요. 최소 인력으로 최대의 효율을 내는 검증된 개체굴
          양식 시스템입니다. 여러 국가에서 공인된 플립팜 장비로 고품질의
          개체굴을 키워보세요.
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
          <li>최소 5년 간 사용 가능한 친환경 부표</li>
          <li>
            개체굴 투입, 수확, 뒤집기 작업까지 모두 자동화 장비로 간편하게 수행
          </li>
          <li>
            적은 인력과 최소한의 노동 시간으로 편리하게 할 수 있는 개체굴 양식
          </li>
          <li>표층 양식으로 고품질 프리미엄 개체굴을 빠르게 양성 가능</li>
          <li>여러 국가에서 인정받은 차별화된 품질의 개체굴 양성 가능</li>
        </ul>
      </div>
      <div className="products-img">
        <div>
          <img src="./images/products/productFlipFarm1.jpg" alt="" />
        </div>
        <div>
          <img src="./images/products/productFlipFarm2.png" alt="" />
        </div>
        <div>
          <img src="./images/products/productFlipFarm3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductFlipFarm;
