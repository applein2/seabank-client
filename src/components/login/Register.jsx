import React, { useEffect, useState } from "react";
import img from "../images/Inquiries.png";
import Back from "../common/Back";
import "./register.css";
import Heading from "../common/Heading";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const changeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };
  const changePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const obj = {
      email: email,
      password: password,
    };

    const newBoard = await fetch("http://localhost:3500/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    const result = await newBoard.json();
    navigate("/login");
    console.log(result);
  };

  return (
    <>
      <section className="register">
        <Back name="register" title="Administrator register" cover={img} />
        <div className="register-container container">
          <Heading
            title="사용자 등록"
            subtitle="Find new & featured property located in your local city."
          />
          <form onSubmit={handleRegister} className="shadow">
            <div className="author">
              <input type="text" placeholder="이메일" onChange={changeEmail} />
              <input
                type="password"
                placeholder="비밀번호"
                onChange={changePassword}
              />
            </div>
            <div className="btn-group">
              <button type="submit">등록</button>
            </div>
          </form>
          <p style={{ marginTop: "10px", fontSize: "15px" }}>
            <a href="./Login">로그인</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Register;
