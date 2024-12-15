import React from "react";
import Products from "./products/Products";
import Hero from "./hero/Hero";
import Location from "./location/Location";
import Media from "./media/Media";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Media />
      <Location />
    </>
  );
};

export default Home;
