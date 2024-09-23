import gsap from "gsap"

// eslint-disable-next-line react/prop-types
const Brand = ({link}) => {

  let scaleUp = function (e) {
    gsap.to(e.target, {
      scale: 1.5,
      duration: 1,
    })
  } 
  let scaleDown = function (e) {
    gsap.to(e.target, {
      scale: 1,
      duration: 1,
    })
  }

  return (
    <div className="flex justify-center h-[100px] w-[100px] md:w-[200px] md:h-[200px] lg:mt-5 lg:mx-4">
      <img onMouseEnter={scaleUp} onMouseLeave={scaleDown} className=" aspect-square object-contain " src={link} alt="" />
    </div>
  )
}

export default Brand
