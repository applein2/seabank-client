import React from "react"
import Heading from "../../common/Heading"
import "./style.css"
import Map from "./Map"
import { SiFacebook } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";
import { SiNaver } from "react-icons/si";
import { IoHome } from "react-icons/io5";
import { IoFileTrayFullSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaFax } from "react-icons/fa6";
import { BsBuildingFillDown } from "react-icons/bs";

const Location = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading
            title="연락처 및 위치"
            subtitle="Find our Location and Specific information."
          />
          <div className="content grid2 mtop">
            <div className="box">
              <div className="address">
                <div>
                  <BsBuildingFillDown size="20" color="#27ae60" />
                </div>
                <p>(주)씨뱅크</p>
              </div>
              <div className="address">
                <div>
                  <IoHome size="20" color="#27ae60" />
                </div>
                <p>
                  주소: 부산광역시 영도구 해양로 435-1 해양물류산업센터 302호
                </p>
              </div>
              <div className="address">
                <div>
                  <IoCall size="20" color="#27ae60" />
                </div>
                <p>연락처: 051-403-7828 / 010-3887-0336</p>
              </div>
              <div className="address">
                <div>
                  <FaFax size="18" color="#27ae60" />
                </div>
                <p>팩스: 051-405-7828</p>
              </div>
              <div className="address">
                <div>
                  <IoFileTrayFullSharp size="20" color="#27ae60" />
                </div>
                <p>이메일: seabank73@gmail.com</p>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <div>
                  <a href="https://blog.naver.com/seabankco" target="_blank">
                    <SiNaver size="25" color="#999" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/p/seabank-coltd-100054391215232/"
                    target="_blank"
                  >
                    <SiFacebook size="25" color="#999" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/seabank.co/"
                    target="_blank"
                  >
                    <FaSquareInstagram size="25" color="#999" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UCveBb6NgsBQF7GAAnTxJ3CA/about"
                    target="_blank"
                  >
                    <SiYoutube size="25" color="#999" />
                  </a>
                </div>
              </div>
            </div>
            <div className="box">
              <div>
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Location
