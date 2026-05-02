import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div>
            <div  className="card bg-base-100 w-96 shadow-sm border border-amber-600 p-4 my-4 ">
            <figure>
              <Image
                className=" rounded-md"
                width={200}
                height={200}
                src={product.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              
              <label className="label">
                <span className="label-text">Rating: {product.rating}</span>
              </label>
              <input type="range" min={0} max='5'  step={0.1} defaultValue={product.rating} className="range range-accent range-sm bg-green-200 pointer-events-none" />
              
              <span className="font-semibold text-xl"> ${(product.price).toFixed(2)} <del className='mx-3'> ${((product.price) + 3).toFixed(2)} </del>  </span>
              <div className="card-actions">
                <Link href={`/products/${product.id}`} className='w-full'>
                <button className="btn btn-info w-full"> See Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    );
};

export default ProductCard;