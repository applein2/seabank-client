import React from "react";
import Heading from "../../common/Heading";
import "./products.css";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <>
      <section className="product background">
        <div className="container">
          <Heading
            title="주요 제품 소개"
            subtitle="Find All Type of Products."
          />
          <ProductCard />
        </div>
      </section>
    </>
  );
};

export default Products;
