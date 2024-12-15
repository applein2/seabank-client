import React from 'react'
import "./about.css";
import Heading from "../common/Heading"

const History = ({history}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 50 }}>
      {history.map((item) => (
        <div
          className="history-container-container"
          style={{ display: "flex", gap: 30 }}
          key={item.id}
        >
          <div
            style={{
              backgroundColor: "#5195D3",
              padding: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            <h3>{item.id}</h3>
          </div>
          <div
            style={{
              flex: 1,
              backgroundColor: "white",
              border: "1px solid #ddd",
              padding: 20,
            }}
          >
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: 20,
              }}
            >
              {item.text.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default History