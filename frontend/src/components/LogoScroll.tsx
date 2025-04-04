import {
  airbnbImg,
  appleImg,
  bmwImg,
  cocacolaImg,
  etherumImg,
  facebookImg,
  googleImg,
  netflixImg,
  olaImg,
  redbullImg,
  soundCloudImg,
  twitterImg,
} from "@/lib/utils.js";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LogoScroll = () => {
  const logos = [
    googleImg,
    appleImg,
    facebookImg,
    twitterImg,
    bmwImg,
    netflixImg,
    olaImg,
    soundCloudImg,
    cocacolaImg,
    airbnbImg,
    redbullImg,
    etherumImg,
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  // const logosWrapperRef = useRef<HTMLDivElement>(null);
  // const animationRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    const container = containerRef.current;
    // const logosWrapper = logosWrapperRef.current;
    
    function addAnimation () {
      if (!container) return;
      
      const innerScroller = container.querySelector(".scroll_inner");

      if(!innerScroller) return;

      if(innerScroller.getAttribute("data-clone") === "true") return;
      const innerScrollerChildren = Array.from(innerScroller.children);
      
      innerScrollerChildren.forEach((child) => {
        const extendedLogos = child.cloneNode(true) as HTMLElement;
        innerScroller.appendChild(extendedLogos);
      });

      innerScroller.setAttribute("data-clone", "true");
    }
    addAnimation();
  }, []);

  return (
    <div ref={containerRef} className="scroller py-12">
      <div
        className="scroll_inner flex flex-wrap py-8 items-center gap-2 animate-scroll"
      >
        {logos.map((logo, index) => (
          <img
            key={`logo-${index}`}
            src={logo}
            alt="Technology logo"
            className="h-14 w-36 object-contain"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoScroll;
