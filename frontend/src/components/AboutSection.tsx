import { Link } from "react-router-dom"

const AboutSection = () => {
  return (
    <div className=' h-[500px] flex flex-wrap justify-around py-10 md:h-80 lg:flex-nowrap lg:h-60 lg:px-4'>
        <div className="flex flex-wrap flex-col gap-3 md:flex-row md:gap-10 lg:gap-1 xl:flex-col">
            <div
                id="logo"
                className="text-3xl font-bold mb-4 bg-gradient-to-t from-gray-500 to-white text-transparent bg-clip-text"
            >
                Mackhack
            </div>
            <input type="text" placeholder="Search" className="p-2 rounded-md border border-white md:h-10"/>
            <button className="border-[1px] border-white px-4 py-2 rounded-md md:h-10">Subscribe</button>
        </div>
        <div className="flex flex-wrap items-center flex-col py-2 w-[800px] md:flex-row md:justify-center lg:flex-nowrap lg:items-start lg:py-0">
            <div className="p-2 text-lg font-semibold w-52 md:ml-24 lg:p-0">
                <ul>
                    <li><Link to={"/teaching"}>Teach on Makehack</Link></li>
                    <li><Link to={"/aboutUs"}>About us</Link></li>
                    <li><Link to={"contactUs"}>Contact us</Link></li>
                </ul>
            </div>
            <div className="p-2 text-lg font-semibold w-52 lg:p-0">
                <ul>
                    <li><Link to={"/teaching"}>Terms</Link></li>
                    <li><Link to={"/aboutUs"}>Privacy Policy</Link></li>
                    <li><Link to={"contactUs"}>Help & Support</Link></li>
                </ul>
            </div>
            <div className="p-2 text-lg font-semibold w-52 lg:p-0">
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