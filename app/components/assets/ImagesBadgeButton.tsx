"use client";

import Link from "next/link";
import { ImagesBadge } from "@/components/ui/images-badge";

export function ImagesBadgeButton() {
  return (
    <div>
      <Link href="https://drive.google.com/drive/folders/1dvAbupXkztRDqfCwBugwzSDJMOL_GE6j?usp=drive_link" target="_blank">
        <ImagesBadge
          text="Explore Plans"
          images={[
            "/screenshot1.png",
            "/screenshot2.png",
            "/screenshot3.png",
            "/screenshot4.png",
          ]}
        />
      </Link>
    </div>
  );
}
