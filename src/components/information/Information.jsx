import React, { useEffect, useState } from "react";
import Back from "../common/Back";
import InformationList from "./InformationList";
import img from "../images/NoticeBack.jpg";
import Heading from "../common/Heading";
import Paigination from "./Paigination";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBoards } from "../../state/index";
import { useDispatch } from "react-redux";
import "./information.css";

const Information = () => {
  const [count, setCount] = useState(0);
  const boards = useSelector((state) => state.boards);
  const token = useSelector((state) => state.token);
  // const [boards, setBoards] = useState([])
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/board");
  };

  useEffect(() => {
    const pickBoards = async () => {
      try {
        const newBoard = await fetch("http://localhost:3500/board/1", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const result = await newBoard.json();
        console.log(result);
        dispatch(getBoards({ boards: result.board }));
        setCount(result.count);
      } catch (err) {
        console.log(err);
      }
    };
    pickBoards();
  }, []);

  return (
    <>
      <section className="information mb">
        <Back name="Notice" title="Notice & QnA" cover={img} />
        <div className="information-container container">
          <Heading
            title="게시판"
            subtitle="Find new & featured property located in your local city."
          />
          {token ? (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button onClick={handleClick}>작성하기</button>
            </div>
          ) : null}
          <InformationList boards={boards} token={token} />
          <Paigination count={count} />
        </div>
      </section>
    </>
  );
};

export default Information;
