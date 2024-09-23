import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

const CategorySection = () => {
  let sectionRef = useRef(null);
  let targetRef = useRef(null);

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
    <section ref={targetRef} className='h-[850px] text-center overflow-hidden'>
      <div className='text-3xl font-bold m-5 md:text-5xl'>
        <h2>Categories</h2>
      </div>
      <div >
        <div ref={sectionRef} className="h-[80%] w-[420vw] flex flex-row relative">
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
        </div>
      </div>
    </section>
  )
}

export default CategorySection
