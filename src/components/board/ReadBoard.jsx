import React, { useState } from "react";
import img from "../images/Inquiries.png";
import Back from "../common/Back";
import "./readBoard.css";
import Heading from "../common/Heading";
import { useLocation, useNavigate } from "react-router-dom";

const Board = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [created, setCreated] = useState("");
  const [files, setFiles] = useState(null);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/information");
  };

  const location = useLocation();

  if (location.state?.item) {
    setTitle(location.state?.item.title);
    setContent(location.state?.item.contents);
    setAuthor(location.state.item.author);
    setCreated(location.state.item.created.slice(0, 10));
    setFiles([...location.state.item.attachmentFiles]);
    location.state = null;
  }

  return (
    <>
      <section className="board">
        <Back name="Read Document" title="Board" cover={img} />
        <div className="board-container container">
          <Heading
            title="게시글"
            subtitle="Find new & featured property located in your local city."
          />
          <form className="shadow">
            <input type="text" placeholder="제목" value={title} readOnly />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <input type="text" placeholder="작성자" value={author} readOnly />
              <input
                type="text"
                placeholder="작성일자"
                value={created}
                readOnly
              />
            </div>
            <div
              style={{
                border: "1px solid #eee",
                padding: "10px",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            >
              {files?.map((file, index) => (
                <a
                  key={index}
                  href={`http://localhost:3500/download?filename=${file}`}
                  style={{ display: "block" }}
                >
                  {file}
                </a>
              ))}
            </div>
            <textarea
              cols="30"
              rows="10"
              placeholder="작성내용"
              value={content}
              readOnly
            ></textarea>
            <div
              className="btn-group"
              style={{
                margin: "auto",
              }}
            >
              <button onClick={handleBack}>돌아가기</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Board;
