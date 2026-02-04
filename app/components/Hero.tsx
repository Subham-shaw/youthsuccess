// Hero.tsx
import background2 from "@/videos/background2.mp4";
import BackgroundVideo from "next-video/background-video";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MainMotion from "@/components/MainMotion";
import VideoPopup from "./assets/VideoPopup";

const words = `Excellence in delivering expert analysis for`;

export default function Main() {
  return (
    <section className="relative min-h-[100svh] overflow-x-hidden">
      {/* BACKGROUND */}
      <div
        className="
          absolute inset-0
          w-screen h-full overflow-hidden
          [clip-path:ellipse(160%_85%_at_50%_0%)]
          sm:[clip-path:ellipse(140%_85%_at_50%_0%)]
          lg:[clip-path:ellipse(100%_80%_at_50%_0%)]
        "
      >
        <BackgroundVideo
          src={background2}
          className="h-full w-full object-cover"
        />
        <div className="overlay-itro" />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-20
          flex min-h-[100svh] flex-col items-center justify-center
          px-4 sm:px-6 lg:px-8
          text-center
        "
      >
        <h1
          className="
            text-white font-extrabold leading-tight
            text-2xl sm:text-4xl md:text-5xl
            lg:text-6xl xl:text-7xl
            max-w-[90vw] sm:max-w-4xl md:max-w-[80vw] md:m-5
          "
        >
          <TextGenerateEffect words={words} />
        </h1>

        <div>
          <MainMotion />
        </div>

        <div className="z-9999">
          <VideoPopup />
        </div>
      </div>
    </section>
  );
}
