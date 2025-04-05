import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const VideoSection = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef1.current?.play();
        } else {
          videoRef1.current?.pause(); // Pause the video if it leaves the viewport
        }
      },
      { threshold: 0.5 } // Adjust threshold to define visibility percentage
    );

    if (videoRef1.current) {
      observer.observe(videoRef1.current);
    }

    return () => {
      if (videoRef1.current) {
        observer.unobserve(videoRef1.current);
      }
    };
  }, []);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef2.current?.play();
        } else {
          videoRef2.current?.pause(); // Pause the video if it leaves the viewport
        }
      },
      { threshold: 0.5 } // Adjust threshold to define visibility percentage
    );

    if (videoRef2.current) {
      observer.observe(videoRef2.current);
    }

    return () => {
      if (videoRef2.current) {
        observer.unobserve(videoRef2.current);
      }
    };
  }, []);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef3.current?.play();
        } else {
          videoRef3.current?.pause(); // Pause the video if it leaves the viewport
        }
      },
      { threshold: 0.5 } // Adjust threshold to define visibility percentage
    );

    if (videoRef3.current) {
      observer.observe(videoRef3.current);
    }

    return () => {
      if (videoRef3.current) {
        observer.unobserve(videoRef3.current);
      }
    };
  }, []);

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
          <video ref={videoRef1} className='w-full h-full object-cover' >
            <source src="./videos/videoSection1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div id='video-section' className='w-full h-full flex justify-center items-center md:hidden lg:hidden'>
          <video ref={videoRef2} className='w-full h-full object-cover'>
            <source src="./videos/videoSection2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div id='video-section' className='w-full h-full hidden justify-center items-center md:flex lg:hidden'>
          <video ref={videoRef3} className='w-full h-full object-cover'>
            <source src="./videos/videoSection3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  )
}

export default VideoSection