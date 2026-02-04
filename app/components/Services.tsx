import React from "react";
// import { ExpandableCard } from "./assets/ExpandableCard";
import SlideUpOnScroll from "@/components/SlideUpOnScroll";
import { AppleCardsCarousel } from "./assets/AppleCardsCarousel";

const Services = () => {
  return (
    <div id="services" className="py-30">
      <SlideUpOnScroll delay={150}>
        <h1 className="heading text-center text-6xl font-bold">
          Services
        </h1>

        {/* <p className="text-center text-gray-500 px-4 md:px-[15vw] pt-5 tracking-wider sm: text-sm">
          From breaking ground to crossing the finish line, we provide strategic
          opportunities to secure your financial future. Whether laying the
          cornerstone of a new development or backing a champion, our expertise
          ensures you are always positioned for victory.
        </p> */}
      </SlideUpOnScroll>

      <AppleCardsCarousel/>

      {/* <ExpandableCard /> */}
    </div>
  );
};

export default Services;
