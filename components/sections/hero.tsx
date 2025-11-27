"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextGenerateEffect } from "../animated/text-generate-effect";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(".hero-text", { y: -100, opacity: 0 }, 0);
  }, []);

  return (
    <div className="hero-container relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <div className="hero-text text-center">
          <TextGenerateEffect
            words="Crafting Digital Experiences with Code and Creativity"
            className="text-4xl font-bold text-white md:text-7xl"
          />
          <p className="mt-4 text-lg text-gray-300">
            Full-Stack Developer | Creative Technologist
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="h-16 w-8 rounded-full border-2 border-white">
            <div className="relative top-2 mx-auto h-4 w-1 animate-bounce rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
