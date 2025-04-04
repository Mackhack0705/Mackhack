import { airbnbImg, appleImg, bmwImg, cocacolaImg, etherumImg, facebookImg, googleImg, netflixImg, olaImg, redbullImg, soundCloudImg, twitterImg } from '@/lib/utils.js';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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
        etherumImg
      ];

      const containerRef = useRef<HTMLDivElement>(null);
      const logosWrapperRef = useRef<HTMLDivElement>(null);
      const animationRef = useRef<gsap.core.Timeline>();
    
      useEffect(() => {
        const container = containerRef.current;
        const logosWrapper = logosWrapperRef.current;
        if (!container || !logosWrapper) return;
    
        // Calculate required dimensions
        const containerWidth = container.offsetWidth;
        const logoElements = Array.from(logosWrapper.children) as HTMLElement[];
        const totalLogosWidth = logoElements.reduce((acc, el) => acc + el.offsetWidth + 64, 0); // 64 = gap-16
    
        // Set initial position for seamless loop
        gsap.set(logosWrapper, { x: -totalLogosWidth });
    
        // Create animation timeline
        animationRef.current = gsap.timeline({
          repeat: -1,
          defaults: { ease: "none" }
        });
    
        // Animation with wrap-around logic
        animationRef.current.to(logosWrapper, {
          x: 0,
          duration: totalLogosWidth / 100, // Adjust speed (100 = pixels per second)
          modifiers: {
            x: (x) => {
              const xNum = gsap.utils.wrap(-totalLogosWidth, 0, parseFloat(x));
              return `${xNum}px`;
            }
          }
        });
    
        // Handle hover
        const handleHover = () => animationRef.current?.pause();
        const handleUnhover = () => animationRef.current?.play();
        container.addEventListener('mouseenter', handleHover);
        container.addEventListener('mouseleave', handleUnhover);
    
        // Handle window resize
        const resizeHandler = () => {
          const newContainerWidth = container.offsetWidth;
          const newTotalWidth = logoElements.reduce((acc, el) => acc + el.offsetWidth + 64, 0);
          animationRef.current?.kill();
          
          gsap.set(logosWrapper, { x: -newTotalWidth });
          animationRef.current = gsap.timeline({
            repeat: -1,
            defaults: { ease: "none" }
          }).to(logosWrapper, {
            x: 0,
            duration: newTotalWidth / 100,
            modifiers: { x: (x) => `${gsap.utils.wrap(-newTotalWidth, 0, parseFloat(x))}px` }
          });
        };
    
        window.addEventListener('resize', resizeHandler);
    
        return () => {
          animationRef.current?.kill();
          window.removeEventListener('resize', resizeHandler);
          container.removeEventListener('mouseenter', handleHover);
          container.removeEventListener('mouseleave', handleUnhover);
        };
      }, []);

  return (
    <div className="relative overflow-hidden py-12">
      <div 
        ref={containerRef}
        className="relative h-24 [mask-image:_linear-gradient(to_right,transparent_0%,_white_5%,_white_95%,_transparent_100%)]"
      >
        {/* Single set of logos with duplicated content for proper wrapping */}
        <div
          ref={logosWrapperRef}
          className="absolute flex h-full items-center gap-16"
          style={{ willChange: 'transform' }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={`logo-${index}`}
              src={logo}
              alt="Technology logo"
              className="h-14 w-36 object-contain opacity-80 grayscale transition-all 
                hover:opacity-100 hover:grayscale-0 dark:opacity-75"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoScroll