import React from "react";
import Heading from "../../common/Heading";
import "./media.css";
import MediaCard from "./MediaCard";

const media = () => {
  return (
    <>
      <section className="media background">
        <div className="container">
          <Heading title="언론보도" subtitle="Media Coverage" />
          <MediaCard />
        </div>
      </section>
    </>
  );
};

export default media;
