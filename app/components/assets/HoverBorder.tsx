"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export function HoverBorder() {
  return (
    <div className="m-4 sm:m-6 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full w-full sm:w-auto"
        as="button"
        className="
          bg-black text-white 
          flex items-center justify-center 
          gap-2 sm:gap-3
          px-3 py-1 
          sm:px-3 sm:py-2
          text-sm sm:text-base md:text-lg
          w-full sm:w-auto
        "
      >
        <PlayCircleOutlineIcon
          className="text-lg sm:text-xl md:text-2xl"
        />
        <span className="whitespace-nowrap">
          Watch Video
        </span>
      </HoverBorderGradient>
    </div>
  );
}
