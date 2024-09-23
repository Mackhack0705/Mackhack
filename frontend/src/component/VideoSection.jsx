import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const VideoSection = () => {
  const videoRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause(); // Pause the video if it leaves the viewport
        }
      },
      { threshold: 0.5 } // Adjust threshold to define visibility percentage
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo("#video-section",
      {
        scale: 0.5
      },
      {
      scale: 1.1,
      scrollTrigger: {
        trigger: "#target-section",
        scroller: "body",
        start: "top top",
        end: "2000 top",
        scrub: 2,
        pin: true
      }
    })
  })

  return (
    <div id='target-section' className='h-[600px] mb-10 flex justify-center items-center'>
        <div id='video-section' className='w-full h-full justify-center items-center hidden lg:flex'>
          <video ref={videoRef} width="600">
            <source src="./videos/videoSection1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div id='video-section' className='w-full h-full flex justify-center items-center md:hidden'>
          <video ref={videoRef} width="600" className='h-full'>
            <source src="./videos/videoSection2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div id='video-section' className='w-full h-full hidden justify-center items-center md:flex lg:hidden'>
          <video ref={videoRef} width="600">
            <source src="./videos/videoSection3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  )
}

export default VideoSection