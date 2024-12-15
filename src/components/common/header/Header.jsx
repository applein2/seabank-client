import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLogout } from "../../../state";

const Header = () => {
  const dispatch = useDispatch()
  const [navList, setNavList] = useState(false);
  
  const token = useSelector((state) => state.token);
  const logout = () => {
    dispatch(setLogout())
  }

  return (
    <>
      <header>
        <div className="container flex header">
          <div className="logo">
            <Link to="/">
              <img src="./images/logo.png" alt="" />
            </Link>
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {/* {nav.map((list, index) => ( */}
              <li>
                <Link to={"/"}>홈</Link>
                <Link to={"/about"}>회사소개</Link>
                <Link to={"/products"}>제품</Link>
                <Link to={"/information"}>게시판</Link>
                <Link to={"/inquiries"}>구매문의</Link>
                {token ? (
                  <Link to={"/login"} onClick={logout}>로그아웃</Link>
                ) : (
                  <Link to={"/login"}>로그인</Link>
                )}
              </li>
              {/* ))} */}
            </ul>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
