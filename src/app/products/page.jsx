import React from 'react';

import ProductCard from '@/components/ProductCard';
import { productsData } from '@/lib/Data';

const ProductsPage = async () => {
     const products = await productsData();
    return (
        <div className="grid grid-cols-3 gap-6  ">
            {products.map((product) => (            

        <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );
};

export default ProductsPage;