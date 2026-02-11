"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect2";
import SlideUpOnScroll from "@/components/SlideUpOnScroll";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional arrows

const words1 = `YouthSuccess Ecommerce Pvt. Ltd. was incorporated on 2nd January 2026 and is a diversified enterprise led by experienced professionals with a strong record of industry achievements. The company operates across Ornament Business, E-Commerce, Insurance Broking, Real Estate, Land Development, and Trading, with a strategic focus on structured growth, governance, and long-term value creation. Over the next decade, YouthSuccess aims to establish a leading presence across its core business verticals through disciplined execution and sustainable expansion.`;


const carouselImages = [
  { src: "/horse.png", alt: "Horse Racing 1" },
  { src: "https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c", alt: "finance" },
  { src: "https://images.unsplash.com/photo-1640451859877-1374a1155215", alt: "trading" },
  { src: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmluYW5jZXxlbnwwfDF8MHx8fDA%3D", alt: "buildings" },
  { src: "https://images.unsplash.com/photo-1662062274618-8babed7851ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9yc2UlMjByYWNpbmd8ZW58MHwxfDB8fHww", alt: "horse_racing2" },
  { src: "https://images.unsplash.com/photo-1525147329759-9d68920cd7fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZCUyMGRldmVsb3BtZW50fGVufDB8MXwwfHx8MA%3D%3D", alt: "land_develpment" },
  { src: "https://images.unsplash.com/photo-1621264448270-9ef00e88a935?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfDF8MHx8fDA%3D", alt: "trading2" },
];

const About = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="about"
      className="min-h-screen py-20 flex flex-col justify-center"
    >
      <SlideUpOnScroll delay={150}>
        <h1 className="heading text-center text-4xl md:text-7xl font-bold">
          About
        </h1>
        {/* <p className="text-center text-gray-500 px-4 md:px-[15vw] pt-2 tracking-wider">
          Know more about how we came to be
        </p> */}
      </SlideUpOnScroll>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12 px-6 md:px-[10vw] lg:px-[15vw] py-12 md:justify-between">
        {/* Text Section */}
        {/* <SlideUpOnScroll delay={300}> */}
        <div className="max-w-xl">
          <h2 className="text-xl md:text-3xl font-bold text-[#50C878] tracking-tight text-center md:text-left">
            We Are
          </h2>
          <h1 className="text-2xl md:text-4xl font-extrabold py-2 tracking-tight text-center md:text-left">
            YouthSuccess Eccommerce <br /> Pvt. Ltd.
          </h1>
          <TextGenerateEffect
            words={words1}
            className="tracking-wide text-sm md:text-base text-center md:text-left"
          />
          <div className="flex w-45 justify-between mx-auto md:mx-0 py-10">
            <a href="https://www.youtube.com/@YOUTHSUCCESECCOMMERCEPVTLTD" target="_blank" className="hover:scale-125 transition-all duration-300 ease-in-out">
              <img width="50" height="50" src="https://img.icons8.com/color/96/youtube-play.png"
                alt="youtube-play" />
            </a>
            <a href="https://www.facebook.com/share/1A9ZVX31A5/" target="_blank" className="hover:scale-125 transition-all duration-300 ease-in-out">
              <img width="50" height="50" src="https://img.icons8.com/fluency/96/facebook-new.png"
                alt="facebook-new" />
            </a>
            <a href="https://www.instagram.com/youthsuccessecommerce" target="_blank" className="hover:scale-125 transition-all duration-300 ease-in-out">
              <img width="50" height="50" src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                alt="instagram-new" />
            </a>
            {/* <a href="" target="_blank" className="hover:scale-125 transition-all duration-300 ease-in-out">
              <img width="50" height="50" src="https://img.icons8.com/color/96/linkedin.png"
                alt="linkedin" />
            </a> */}
          </div>
        </div>
        {/* </SlideUpOnScroll> */}

        {/* Carousel Section */}
        {/* <SlideUpOnScroll delay={400}> */}
        {/* IMPORTANT: Styling is applied here, inside the wrapper */}
        <div className="w-full max-w-sm md:max-w-md relative group">

          {/* Viewport */}
          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-xl bg-gray-100" ref={emblaRef}>
            <div className="flex">
              {carouselImages.map((img, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 relative aspect-square md:aspect-[4/5]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons (Optional - Remove if not needed) */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>

        </div>
        {/* </SlideUpOnScroll>   */}
      </div>
    </section>
  );
};

export default About;