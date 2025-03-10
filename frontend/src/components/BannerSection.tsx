import { useGSAP } from '@gsap/react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';

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
   <div className="w-full h-5/6 flex justify-center items-center text-8xl font-extrabold text-center border border-red-500">
        <span id='bannerText' className="bg-linear-to-t from-gray-500 to-white bg-clip-text text-transparent">Best Platform To Get You a <br /> High Paying Job</span>
        <Canvas>
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
            ]}
          />

        </Canvas>
   </div>
  )
}

export default BannerSection
