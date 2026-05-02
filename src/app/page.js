import Hero from "@/components/Hero";
import Popular from "@/components/Popular";
import Tips from "@/components/Tips";
import TopBrand from "@/components/TopBrand";

import Image from "next/image";


export default function Home() {
  return (
    <>
    <Hero />
    <Popular />
    <Tips />
    <TopBrand/>
    </>
  );
}
