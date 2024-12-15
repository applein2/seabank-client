import React from "react";

const Heading = ({ titleFirst, titleSecond, subtitle }) => {
  return (
    <>
      <div className="heading">
        <h1>{titleFirst}</h1>
        <h1>{titleSecond}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
};

export default Heading;
