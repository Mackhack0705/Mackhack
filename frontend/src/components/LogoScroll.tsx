import { appleImg, bmwImg, facebookImg, googleImg, netflixImg, twitterImg } from '@/lib/utils.js';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LogoScroll = () => {
    const logos = [
        googleImg,
        appleImg,
        facebookImg,
        twitterImg,
        bmwImg,
        netflixImg
      ];

      const scrollerRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const logos = logosRef.current;

    if (!scroller || !logos) return;

    // Calculate animation parameters
    const logosWidth = logos.offsetWidth;
    const viewportWidth = scroller.offsetWidth;
    const duration = logosWidth / viewportWidth * 10; // Adjust speed factor (10)

    // Create GSAP timeline
    const tl = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: 'none',
        duration: duration
      }
    });

    // Animation
    tl.fromTo(logos,
      { x: 0 },
      { x: -logosWidth, duration: duration }
    );

    // Pause on hover
    const handleHover = () => tl.pause();
    const handleUnhover = () => tl.resume();
    
    scroller.addEventListener('mouseenter', handleHover);
    scroller.addEventListener('mouseleave', handleUnhover);

    // Cleanup
    return () => {
      tl.kill();
      scroller.removeEventListener('mouseenter', handleHover);
      scroller.removeEventListener('mouseleave', handleUnhover);
    };
  }, []);

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex items-center px-8">

        {/* Scroller Container */}
        <div
          ref={scrollerRef}
          className="flex-1 overflow-hidden relative h-16"
        >
          {/* Logos Container */}
          <div
            ref={logosRef}
            className="absolute flex items-center gap-16"
            style={{ willChange: 'transform' }}
          >
            {/* Original Logos */}
            {logos.map((logo, index) => (
              <img
                key={`original-${index}`}
                src={logo}
                alt="Partner logo"
                className="h-12 w-32 object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-60"
              />
            ))}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoScroll