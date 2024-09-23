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
    <div className="flex justify-center h-[100px] w-[100px] xl:w-[280px] xl:h-[180px] 2xl:w-[300px] 2xl:h-[200px]">
      <img onMouseEnter={scaleUp} onMouseLeave={scaleDown} className=" aspect-square object-contain " src={link} alt="" />
    </div>
  )
}

export default Brand
