import { useGSAP } from '@gsap/react';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls } from "@react-three/drei";
import gsap from 'gsap';
import MacContainer from './MacContainer.js';

const BannerSection = () => {

  useGSAP(() => {
    gsap.from("#bannerText", {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.5
    })
  })
  
  return (
   <div className="w-full h-5/6 flex justify-center items-center text-8xl font-extrabold text-center">
        <span id='bannerText' className="bg-linear-to-t from-gray-500 to-white bg-clip-text text-transparent">Best Platform To Get You a <br /> High Paying Job</span>
        {/* <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
            ]}
          />
          <ScrollControls pages={3}>
            <MacContainer />
          </ScrollControls>
        </Canvas> */}
   </div>
  )
}

export default BannerSection
