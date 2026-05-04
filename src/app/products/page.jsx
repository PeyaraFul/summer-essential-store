import React from 'react';

import ProductCard from '@/components/ProductCard';
import { productsData } from '@/lib/Data';

const ProductsPage = async () => {
     const products = await productsData();
    return (
        <>
        <h1 className="text-3xl font-bold text-center mt-10 mb-2">All Products</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 ">
            {products.map((product) => (            

        <ProductCard product={product} key={product.id} />
            ))}
        </div>
        </>
    );
    
};

export default ProductsPage;