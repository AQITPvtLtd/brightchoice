import About from "@/components/homepage/About";
import Banner from "@/components/homepage/banner";
import Companies from "@/components/homepage/Companies";
import WhatWeDo from "@/components/homepage/WhatWeDo";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <About />
      <WhatWeDo />
      <Companies />
    </div>
  );
}
