import React from "react";
import { productsData } from "@/lib/Data.jsx";

import ProductCard from "./ProductCard";

const Popular = async () => {
  const products = await productsData();

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10">Popular Products</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {products.filter((product) => product.rating >= 4.5).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Popular;
