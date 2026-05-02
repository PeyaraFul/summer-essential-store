import React from "react";
import { productsData } from "@/lib/Data.jsx";

import ProductCard from "./ProductCard";

const Popular = async () => {
  const products = await productsData();

  return (
    <>
      <h1 className="text-2xl mt-6 font-bold text-center">Popular Products</h1>
      <div className="grid grid-cols-3 gap-6  ">
        {products.filter((product) => product.rating >= 4.5).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Popular;
