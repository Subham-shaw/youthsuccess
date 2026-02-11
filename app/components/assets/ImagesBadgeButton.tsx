"use client";
import { ImagesBadge } from "@/components/ui/images-badge";
 
export function ImagesBadgeButton() {
  return (
    <div className="">
      <ImagesBadge
        text="Explore Plans"
        images={[
          "/screenshot1.png",
          "/screenshot2.png",
          "/screenshot3.png",
          "/screenshot4.png",
        ]}
      />
    </div>
  );
}