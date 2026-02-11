"use client";

import React, { useEffect, useState } from "react";
import SlideUpOnScroll from "@/components/SlideUpOnScroll";
import {
  Trophy,
  Zap,
  Star,
  Crown,
  Gauge,
  Diamond,
  Gem,
  Award,
} from "lucide-react";

type Rank = {
  name: string;
  icon: React.ReactNode;
  defaultValue: number;
  maxValue: number;
};

const ranks: Rank[] = [
  { name: "Champion", icon: <Trophy size={40} />, defaultValue: 1000, maxValue: 1600 },
  { name: "Thunderbolt", icon: <Zap size={40} />, defaultValue: 450, maxValue: 600 },
  { name: "Lightning Star", icon: <Star size={40} />, defaultValue: 170, maxValue: 355 },
  { name: "Racing King", icon: <Crown size={40} />, defaultValue: 55, maxValue: 147 },
  { name: "Speed Star", icon: <Gauge size={40} />, defaultValue: 0, maxValue: 0 },
  { name: "Rock Star", icon: <Star size={40} />, defaultValue: 0, maxValue: 0 },
  { name: "Blue Diamond", icon: <Diamond size={40} />, defaultValue: 0, maxValue: 0 },
  { name: "Black Diamond", icon: <Gem size={40} />, defaultValue: 0, maxValue: 0 },
  { name: "Pink Diamond", icon: <Gem size={40} />, defaultValue: 0, maxValue: 0 },
  { name: "Crown", icon: <Crown size={40} />, defaultValue: 0, maxValue: 0 },
  { name: "Ambassador", icon: <Award size={40} />, defaultValue: 0, maxValue: 0 },
  { name: "Successful", icon: <Trophy size={40} />, defaultValue: 0, maxValue: 0 },
];

export default function RankStats() {
  return (
    <div className="w-full px-3 py-16 overflow-hidden">
      <SlideUpOnScroll delay={150}>
        <h1 className="heading text-center text-4xl md:text-5xl font-bold pb-10">
          Auto Pool Achievement
        </h1>
      </SlideUpOnScroll>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-marquee whitespace-nowrap gap-4">
          {[...ranks, ...ranks].map((rank, index) => (
            <RankItem key={`${rank.name}-${index}`} rank={rank} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RankItem({ rank }: { rank: Rank }) {
  const [count, setCount] = useState(rank.defaultValue);
  const isStatic = rank.defaultValue === 0 || rank.maxValue === 0;

  useEffect(() => {
    if (isStatic) return;

    const interval = setInterval(() => {
      setCount((prev) =>
        prev >= rank.maxValue
          ? rank.maxValue
          : Math.min(prev + Math.floor(Math.random() * 3), rank.maxValue)
      );
    }, 800);

    return () => clearInterval(interval);
  }, [isStatic, rank.maxValue]);

  return (
    <div className="flex flex-col items-center min-w-[140px] text-center">
      <div className="text-emerald-500 flex items-center justify-center h-12">
        {rank.icon}
      </div>

      <p className="mt-2 text-base font-semibold text-black">
        {rank.name}
      </p>

      <span className="text-xl font-bold text-black">
        {rank.defaultValue.toLocaleString()}
      </span>
    </div>
  );
}
