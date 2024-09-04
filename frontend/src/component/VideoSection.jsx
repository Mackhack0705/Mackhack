import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const VideoSection = () => {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to("#video-section", {
      scale: 5,
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
    <div id='target-section' className='h-[800px] flex justify-center items-center'>
        <div id='video-section' className='w-64 h-40'>
            <video src='./videos/videoSection.mp4' autoPlay>
            </video>
        </div>
    </div>
  )
}

export default VideoSection