
import BuyNowBtn from "@/lib/BuyNowBtn";
import { productsData } from "@/lib/Data";
import Image from "next/image";

const ProductDetailPage = async ({ params }) => {
  const { Id } = await params;
  const products = await productsData();
  const product = products.find((p) => p.id === parseInt(Id));

  

  return (
    <div className="grid grid-cols-2 gap-4 my-6 p-2">
      <div>
        <Image
          src={product.image}
          width="500"
          height="500"
          alt={product.name}
          className="rounded"
        ></Image>
      </div>
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <div className="badge badge-ghost">
          Price: ${product.price.toFixed(2)}
        </div>
        <div className="badge badge-ghost">
          Regular price: $<del>{(product.price * 1.1).toFixed(2)}</del>
        </div>
        <div className="badge badge-ghost"> Stock: {product.stock}</div>
        <div className="badge badge-ghost my-2">
          {" "}
          Product code: {product.code}
        </div>
        <br />

        <div className="badge badge-accent my-2">
          Category: {product.category}
        </div>
        <br />
        <div className="badge badge-accent">Brand: {product.brand}</div>

        <p className="text-gray-600 my-4">{product.description}</p>
        <ul className="list-disc list-inside">
          {product.features.map((feature, index) => (
            <li key={index} className="text-gray-600">
              {feature}
            </li>
          ))}
        </ul>

        {/* Payment methode */}
        <h2 className="text-lg mt-6">Payment System</h2>
        
          <div className="grid grid-cols-2 card card-border bg-base-100 gap-4">
            <label className="card bg-base-100 shadow-sm cursor-pointer border border-base-300 hover:border-success transition-all">
              <div className="card-body">
                <h2 className="card-title">Cash on Delivery</h2>
                <div className="flex justify-between gap-4 items-center">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio radio-success"
                    defaultChecked
                  />
                  <p className="text-xl">
                    Total Price: ${(product.price + 0.5).toFixed(2)}
                  </p>
                </div>
              </div>
            </label>
            <label className="card bg-base-100 shadow-sm cursor-pointer border border-base-300 hover:border-success transition-all">
              <div className="card-body">
                <h2 className="card-title">Online Payment</h2>
                <div className="flex justify-between gap-4 items-center">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio radio-success"
                    defaultChecked
                  />
                  <p className="text-xl">
                    Total Price: ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </label>
          </div>
          <BuyNowBtn />

          
      </div>
    </div>
  );
};

export default ProductDetailPage;
