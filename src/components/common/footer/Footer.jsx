import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoFileTrayFullSharp } from "react-icons/io5";
import { BsBuildingFillDown } from "react-icons/bs";

const Footer = () => {
  const navigate = useNavigate();

  const moveInquiries = () => {
    navigate("/inquiries#top");
  };

  const movePage = (name) => {
    if (name === "문의사항 메일 발송") {
      navigate('/inquiries')
    } else if (name === "조난알리미") {
      navigate('/products')
    } else if (name === "플립팜 개체굴 양식 시스템") {
      navigate("/products");
    } else if (name === "해양환경 관측장비") {
      navigate("/products");
    } else if (name === "ESS 양식 작업선") {
      navigate("/products");
    } else if (name === "소개") {
      navigate("/about");
    }
  }

  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>문의사항이 있으신가요?</h1>
              <p>We'll help you to find the best services what you need.</p>
            </div>
            <button className="btn5" onClick={moveInquiries}>
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <div>
                <img src="../images/logo.png" alt="" />
              </div>
              <div>
                <div className="input">
                  <p>
                    <BsBuildingFillDown size="15" color="#888" />
                    &nbsp;(주)씨뱅크
                  </p>
                  <p>
                    <IoHome size="15" color="#888" />
                    &nbsp;부산시 영도구 해양로 435-1, 해양물류산업센터 302호
                  </p>
                  <p>
                    <IoCall size="15" color="#888" />
                    &nbsp;051-403-7828 / 010-3887-0336
                  </p>
                  <p>
                    <IoFileTrayFullSharp size="15" color="#888" />
                    &nbsp;seabank73@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="menu">
            {footer.map((val) => (
              <div className="box" key={val.id}>
                <h3>{val.title}</h3>
                <ul>
                  {val.text.map((items) => (
                    <li key={items.list} onClick={() => movePage(items.list)}> {items.list} </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div className="legal">
        <span>© 2024 seabank.</span>
      </div>
    </>
  );
};

export default Footer;
