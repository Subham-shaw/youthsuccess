"use client";

import { useState, useEffect } from "react";
import Video from "next-video";
import youthsuccess from '@/videos/youthsuccess.mp4'
import { X } from "lucide-react";
import { HoverBorder } from "./HoverBorder";

export default function VideoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Open Button */}
      <button onClick={() => setOpen(true)} className="relative z-20">
        <HoverBorder />
      </button>

      {open && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/70
            p-4
          "
        >
          {/* POPUP */}
          <div
            className="
              relative
              w-full
              max-w-[90vw] sm:max-w-[960px]
              aspect-video
              max-h-[80vh]
              bg-black
              rounded-xl
              overflow-hidden
              z-9999999
            "
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute top-3 right-3 z-10
                bg-black/70 text-white
                rounded-full p-2
                hover:bg-black/90 transition
              "
              aria-label="Close video"
            >
              <X size={18} />
            </button>

            {/* Video */}
            <Video
              src={youthsuccess}
              poster="/logo.jpeg"
              autoPlay
              controls
              playsInline
              className="w-full h-full object-contain "
            />
          </div>
        </div>
      )}
    </>
  );
}
