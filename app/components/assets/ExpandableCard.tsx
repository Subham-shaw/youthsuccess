"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import SlideUpOnScroll from "@/components/SlideUpOnScroll";

export function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }

    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

 useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
          />
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-50 grid place-items-center p-4">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-48 sm:h-56 md:h-72 object-cover"
                />
              </motion.div>

              <div className="p-4">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="text-lg font-semibold text-neutral-800 dark:text-neutral-100"
                >
                  {active.title}
                </motion.h3>

                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 mt-1"
                >
                  {active.description}
                </motion.p>

                <div className="mt-4 max-h-48 overflow-auto text-sm text-neutral-600 dark:text-neutral-400">
                  {active.content()}
                </div>

                <a
                  href={active.ctaLink}
                  target="_blank"
                  className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold"
                >
                  {active.ctaText}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Cards Grid */}
      <ul className="max-w-7xl md:max-w-[90rem] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-16 ">
        {cards.map((card, index) => (
          <motion.li
            key={card.title}
            layoutId={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="cursor-pointer rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 p-3"
          >
            <SlideUpOnScroll delay={index * 150}>
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-44 sm:h-52 md:h-60 rounded-lg object-cover"
                />
              </motion.div>

              <div className="mt-3 text-center">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200"
                >
                  {card.title}
                </motion.h3>

                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-sm"
                >
                  {card.description}
                </motion.p>
              </div>
            </SlideUpOnScroll>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

const cards = [
  {
    title: "Real Estate",
    description: "Residential & Commercial",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    ctaText: "Explore Properties",
    ctaLink: "#",
    content: () => (
      <p>
        Real estate involves buying, selling, and leasing properties for wealth
        creation and long-term stability.
      </p>
    ),
  },
  {
    title: "Land Development",
    description: "Planning & Infrastructure",
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
    ctaText: "View Projects",
    ctaLink: "#",
    content: () => (
      <p>
        Transforming raw land into sustainable residential and commercial
        projects.
      </p>
    ),
  },
  {
    title: "Stock Trading",
    description: "Global Financial Markets",
    src: "https://images.unsplash.com/photo-1629339942248-45d4b10c8c2f?q=80&w=1000&auto=format&fit=crop",
    ctaText: "Start Trading",
    ctaLink: "#",
    content: () => (
      <p>
        Trade global markets with data-driven strategies and 24/5 access.
      </p>
    ),
  },
  {
    title: "Horse Racing",
    description: "Thoroughbred Action",
    src: "https://images.unsplash.com/photo-1597651482572-9957ddaacfab?q=80&w=1000&auto=format&fit=crop",
    ctaText: "See the Odds",
    ctaLink: "#",
    content: () => (
      <p>
        Experience the thrill of elite horse racing and strategic investments.
      </p>
    ),
  },
];
