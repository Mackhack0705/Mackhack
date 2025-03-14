import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls } from "@react-three/drei";
import MacContainer from './MacContainer.js';


const CategorySection = () => {
  let sectionRef = useRef(null);
  let targetRef = useRef(null);

  const categories = [
    {
      id: 1,
      textLists: [
        "Enter A17 Pro.",
        "Game‑changing chip.",
        "Groundbreaking performance.",
      ],
      video: '/videos/category-first.mp4',
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Titanium.", "So strong. So light. So Pro."],
      video: '/videos/category-second.mp4',
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "iPhone 15 Pro Max has the",
        "longest optical zoom in",
        "iPhone ever. Far out.",
      ],
      video: '/videos/category-third.mp4',
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["All-new Action button.", "What will yours do?."],
      video: '/videos/category-four.mp4',
      videoDuration: 3.63,
    },
  ]

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, {
      translateX: 0,
    }, {
      translateX: "-310vw",
      ease: "none",
      scrollTrigger: {
        trigger: targetRef.current,
        scroller: "body",
        start: "top top",
        end: "2000 top",
        scrub: 2,
        pin: true
      }
    });
    ScrollTrigger.refresh();
  })

  return (
    <section className='h-screen text-center'>
      <div className='text-3xl font-bold m-5 md:text-5xl bg-gradient-to-t from-gray-500 to-white bg-clip-text text-transparent'>
        <h2>Categories</h2>
      </div>
      <div className='h-screen flex items-center border border-red-500'>
        {
          categories.map((list, i) => (
            <div key={list.id} id='slider' className='sm:pr-20 pr-10 border border-blue-500'>
              <div className='video-carousel_container border border-yellow-500'>
                <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                  <video id='video' playsInline={true} preload='auto' muted>
                    <source src={list.video} type='video/mp4' />
                  </video>
                </div>

                <div className='absolute top-12 left-[5%] z-10'>
                  
                </div>
              </div>
            </div>
          ))
        }
        {/* <div ref={sectionRef} className="h-[80%] w-[420vw] flex flex-row relative">
          <div className='h-[100vh] px-10 w-[130vw] flex justify-center items-center text-5xl font-semibold md:text-8xl'>
            <h3>Web Development</h3>
          </div>
          <div className='h-[100vh] px-10 w-[130vw] flex justify-center items-center text-5xl font-semibold md:text-8xl'>
            <h3>Machine Learning</h3>
          </div>
          <div className='h-[100vh] px-10 w-[130vw] flex justify-center items-center text-5xl font-semibold md:text-8xl'>
            <h3>Artificial Intelligence</h3>
          </div>
          <div className='h-[100vh] px-10 w-[130vw] flex justify-center items-center text-5xl font-semibold md:text-8xl'>
            <h3>App Development</h3>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default CategorySection
