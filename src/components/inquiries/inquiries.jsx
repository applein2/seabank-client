import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../images/Inquiries.png";
import Back from "../common/Back";
import "./inquiries.css";
import Heading from "../common/Heading";

const Inquiries = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const mailContent = {
    name: state.name,
    company: state.company,
    email: state.email,
    phone: state.phone,
    title: state.title,
    message: state.message,
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    try {
      const newBoard = await fetch("http://localhost:3500/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mailContent),
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="inquiries">
        <Back
          name="Ask for an estimate"
          title="Get Helps & Friendly Support"
          cover={img}
        />
        <div className="inquiries-container container">
          <Heading
            id="top"
            title="구매문의"
            subtitle="Find new & featured property located in your local city."
          />
          <form onSubmit={handleSendMail} className="shadow">
            <div className="author">
              <input
                type="text"
                placeholder="이름"
                name="name"
                value={state.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="회사"
                name="company"
                value={state.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="author">
              <input
                type="text"
                placeholder="이메일"
                name="email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="휴대폰"
                name="phone"
                value={state.phone}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              placeholder="제목"
              name="title"
              value={state.title}
              onChange={handleChange}
              required
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="작성내용"
              name="message"
              value={state.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="btn-group">
              <button type="submit">제출</button>
              <button>닫기</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Inquiries;
