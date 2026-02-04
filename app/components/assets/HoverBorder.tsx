"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export function HoverBorder() {
  return (
    <div className="m-5 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-white flex items-center space-x-2"
      >
        <PlayCircleOutlineIcon />
        <span>Watch Video</span>
      </HoverBorderGradient>
    </div>
  );
}
