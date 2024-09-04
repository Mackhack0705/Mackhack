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
    <>
      <img onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="h-[200px] aspect-square object-contain " src={link} alt="" />
    </>
  )
}

export default Brand
