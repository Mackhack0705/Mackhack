import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const useVideoAutoPlay = (videoRef: React.RefObject<HTMLVideoElement>) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(error => {
            console.log('Video play failed:', error);
          });
          if (videoRef.current) {
            videoRef.current.muted = false;
          }
        } else {
          videoRef.current?.pause(); 
          if (videoRef.current) {
            videoRef.current.muted = true;
          } // Pause the video if it leaves the viewport
        }
      },
      { threshold: 0.5 } // Adjust threshold to define visibility percentage
    );

    const videoElement = videoRef.current;
    if (videoElement) {
      observer.observe(videoElement);

      // videoElement.muted = true;
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [videoRef]);
};

const VideoSection = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);

  useVideoAutoPlay(videoRef1);
  useVideoAutoPlay(videoRef2);
  useVideoAutoPlay(videoRef3);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo("#video-section",
      {
        scale: 0.2
      },
      {
      scale: 1,
      scrollTrigger: {
        trigger: "#target-section",
        scroller: "body",
        start: "top top",
        end: "2000 top",
        scrub: 2,
        pin: true
      },
      delay: 1
    })
  })

  return (
    <div id='target-section' className='h-screen mb-40 flex justify-center items-center'>
        <div id='video-section' className='w-full h-full justify-center items-center hidden md:hidden lg:flex'>
          <video autoPlay playsInline ref={videoRef1} className='w-full h-full object-cover' >
            <source src="./videos/videoSection1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div id='video-section' className='w-full h-full flex justify-center items-center md:hidden lg:hidden'>
          <video autoPlay playsInline ref={videoRef2} className='w-full h-full object-cover'>
            <source src="./videos/videoSection2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div id='video-section' className='w-full h-full hidden justify-center items-center md:flex lg:hidden'>
          <video autoPlay playsInline ref={videoRef3} className='w-full h-full object-cover'>
            <source src="./videos/videoSection3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  )
}

export default VideoSection