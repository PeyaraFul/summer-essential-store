import Image from "next/image";
import React from "react";
import Banner from "../../public/hero-banner.png";
import Link from "next/link";
import Fan from "../../public/fan-offer.png";
import Vest from "../../public/vest-offer.png";

const Hero = () => {
  return (
    <div className="mx-auto">
      <Image src={Banner} className="animate__animated animate__zoomIn rounded-sm" alt="products banner"></Image>
      <h1 className="text-3xl font-bold text-center mt-10 mb-2">Hot Deals!</h1>
      <div className=" flex  gap-10 justify-center">
        <Link href="/">
          <Image
            className="w-full rounded-xl animate__animated animate__pulse animate__infinite"
            src={Fan}
            alt="fan-offer"
          ></Image>
        </Link>
        <Link href="/">
          <Image
            className="w-full rounded-xl animate__animated animate__pulse animate__infinite"
            src={Vest}
            alt="vest-offer"
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
