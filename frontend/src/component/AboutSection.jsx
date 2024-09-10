import { Link } from "react-router-dom"

const AboutSection = () => {
  return (
    <div className='bg-[#9ce2cf] h-[300px] flex justify-around py-10'>
        <div id="logo" className="text-3xl font-bold">
            M<span className="text-[#01c8b5]">a</span>ke
            <span className="text-[#01c8b5]">hack</span>
        </div>
        <div className="flex justify-around w-[800px]">
            <div className="py-2 text-lg font-semibold">
                <ul>
                    <li><Link to={"/teaching"}>Teach on Makehack</Link></li>
                    <li><Link to={"/aboutUs"}>About us</Link></li>
                    <li><Link to={"contactUs"}>Contact us</Link></li>
                </ul>
            </div>
            <div className="py-2 text-lg font-semibold">
                <ul>
                    <li><Link to={"/teaching"}>Terms</Link></li>
                    <li><Link to={"/aboutUs"}>Privacy Policy</Link></li>
                    <li><Link to={"contactUs"}>Help & Support</Link></li>
                </ul>
            </div>
            <div className="py-2 text-lg font-semibold">
                <ul>
                    <li><Link to={"/teaching"}>Careers</Link></li>
                    <li><Link to={"/aboutUs"}>Admin Dashboard</Link></li>
                    <li><Link to={"contactUs"}>Logout</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AboutSection