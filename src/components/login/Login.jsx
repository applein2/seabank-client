import React, { useState } from "react";
import img from "../images/Inquiries.png";
import Back from "../common/Back";
import "./Login.css";
import Heading from "../common/Heading";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../state";

const Login = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(token);
  const changeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };
  const changePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const obj = {
      email: email,
      password: password,
    };

    const newBoard = await fetch("http://localhost:3500/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    const result = await newBoard.json();
    dispatch(setLogin({ user: result.user, token: result.token }));
    navigate("/information");
    console.log(result);
  };

  return (
    <>
      <section className="login">
        <Back name="Login" title="Administrator Login" cover={img} />
        <div className="login-container container">
          <Heading
            title="로그인"
            subtitle="Find new & featured property located in your local city."
          />
          <form onSubmit={handleLogin} className="shadow">
            <div className="author">
              <input
                type="text"
                placeholder="이메일"
                value={email}
                onChange={changeEmail}
              />
              <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={changePassword}
              />
            </div>
            <div className="btn-group">
              <button type="submit">로그인</button>
            </div>
          </form>
          {token ? (
            <p style={{ marginTop: "10px", fontSize: "15px" }}>
              <a href="./register">사용자 등록</a>
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Login;
