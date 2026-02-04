"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full z-99999999">
      <Carousel items={cards} />
    </div>
  );
}


const ServiceContent = ({
  description,
  images,
}: {
  description: string;
  images: string[];
}) => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-9 rounded-3xl space-y-8">

      {/* Image Slider */}
      <div className="relative w-full h-56 md:h-96 overflow-hidden rounded-2xl">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="relative min-w-full h-full">
              <Image
                src={img}
                alt={`Service image ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              index === i
                ? "bg-neutral-900 dark:bg-white"
                : "bg-neutral-400/50"
            }`}
          />
        ))}
      </div>

      {/* Description */}
      <p className="text-neutral-600 dark:text-neutral-300 text-base md:text-xl max-w-4xl mx-auto text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceContent;


const data = [
  {
    category: "Business",
    title: "Ornament Business",
    src: "/services/ornament.jpeg",
    content: (
      <ServiceContent 
        description="Manufacturing, trading, and retailing of gold, silver, and precious ornaments with a strong emphasis on craftsmanship, purity, and long-term customer trust."
        images={[
          "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
          "https://images.unsplash.com/photo-1617191880362-aac615de3c26",
          "https://images.unsplash.com/photo-1626784215013-13322cb0e471"
        ]}
      />
    ),
  },
  {
    category: "Business",
    title: "E-Commerce Business",
    src: "/services/eccomerce.jpg",
    content: (
      <ServiceContent 
        description="Comprehensive online retail solutions covering product sourcing, inventory management, digital payment integration, logistics coordination, and customer experience optimization. Our e-commerce ecosystem focuses on scalability, secure transactions, brand growth, and seamless end-to-end digital operations."
        images={[
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
          "https://images.unsplash.com/photo-1763872011479-aa293bf083a8",
          "https://images.unsplash.com/photo-1758522484646-c8694d1784fa"
        ]}
      />
    ),
  },
  {
    category: "Finance",
    title: "Insurance Broking",
    src: "/services/insurance.jpg",
    content: (
      <ServiceContent 
        description="Advisory and brokerage services for life, health, and general insurance solutions. We assist clients in identifying suitable coverage, managing risk, and navigating policy options through personalized consultation and long-term financial planning support."
        images={[
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
          "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf"
        ]}
      />
    ),
  },
  {
    category: "Property",
    title: "Real Estate",
    src: "/services/realestate.jpg",
    content: (
      <ServiceContent 
        description="Buying, selling, and leasing of residential and commercial properties with a focus on market value, location analysis, and client satisfaction. Our real estate services support investment decisions, asset management, and long-term property growth strategies."
        images={[
          "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
          "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2'
        ]}
      />
    ),
  },
  {
    category: "Infrastructure",
    title: "Land Development",
    src: "https://images.unsplash.com/photo-1492496913980-501348b61469",
    content: (
      <ServiceContent 
        description="End-to-end land acquisition, planning, development, and project execution services. We manage feasibility studies, regulatory approvals, infrastructure planning, and execution to transform land assets into sustainable and high-value developments."
        images={[
          "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6",
          "https://images.unsplash.com/photo-1589939705384-5185137a7f0f",
          "https://images.unsplash.com/photo-1764726201690-bdb28a667d89"
        ]}
      />
    ),
  },
  {
    category: "Markets",
    title: "Trading",
    src: "https://images.unsplash.com/photo-1579226905180-636b76d96082",
    content: (
      <ServiceContent 
        description="Strategic trading operations across commodities, equities, and diverse financial instruments. Our approach combines market research, risk management, and disciplined execution to achieve consistent performance and sustainable returns."
        images={[
          "https://images.unsplash.com/photo-1651341050677-24dba59ce0fd",
          "https://images.unsplash.com/photo-1629339942248-45d4b10c8c2f",
          "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f"
        ]}
      />
    ),
  },
  {
    category: "Finance",
    title: "Horse Racing Bookmakers",
    src: "/services/horseracing.jpg",
    content: (
      <ServiceContent 
        description="Professional betting and odds management services for regulated horse racing markets. Our expertise includes risk assessment, odds calculation, market analysis, and compliance with regulatory standards, ensuring transparent and well-structured wagering operations."
        images={[
          "https://images.unsplash.com/photo-1755972202476-3d66ad4964c0",
          "https://images.unsplash.com/photo-1507514604110-ba3347c457f6",
          'https://images.unsplash.com/photo-1635895901494-539a6b2647af'
        
        ]}
      />
    ),
  },
];
