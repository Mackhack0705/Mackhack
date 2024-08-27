import React, { useEffect, useRef } from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from "recoil";
import { useGSAP } from "@gsap/react";
import gsap, { Expo } from "gsap";
import AllCourses from "./component/AllCourses";
import Teaching from "./pages/Teaching";
import AdminDashboard from "./pages/AdminDashboard";
import NavBar from "./component/NavBar";
import axios from "axios";
import AddCourse from "./component/AddCourse";
const Course = React.lazy(() => import("./component/Course"));
const Login = React.lazy(() => import("./pages/Login"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const Landing = React.lazy(() => import("./pages/Landing"));


function App() {
  const webRef = useRef();

  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem("token");
    if(isLoggedIn) {
      try {
        const userId = window.localStorage.getItem("userId");
        axios.get(`http://localhost:8000/user?userId=${userId}`, {
          headers: {
            'Authorization': `Bearer ${window.localStorage.getItem("token")}`
          }
        })
        .then((res) => {
          window.localStorage.setItem("user", JSON.stringify(res.data.user));
        })
      } catch(err) {
        console.log(err);
      }
    }
  }, []);
  
  
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        webRef.current.style.overflow = "auto"; // Re-enable scrolling after animation
      }});

    tl
    .to("#fs", {
      height: 0,
      display: "none",
      duration: 2,
      delay:1.6,
      ease: Expo.easeInOut,
    })
    .to("#ele", {
      height: "100%",
      duration: 2,
      delay: -2,
      ease: Expo.easeInOut
    })
    .to("#web", {
      height: "100%",
      overflow: "hidden",
      duration: 2,
      delay: -1.8,
      ease: Expo.easeInOut
    })

  })
  
  return (
    <div id="main" className="w-screen h-screen relative">
      <div id="fs" className="w-full h-full bg-black">
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-white stroke-2 animate-loading" style={{fillOpacity: 0, strokeDasharray: 4500}} width="422" height="56" viewBox="0 0 422 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M403.822 53.566L404.261 54.0044H404.881H414.144H417.81L415.195 51.4346L391.448 28.0962L414.968 4.69443L417.545 2.13108H413.911H404.959H404.333L403.893 2.57589L384.042 22.6319V3.63108V2.13108H382.542H375.459H373.959V3.63108V52.5044V54.0044H375.459H382.542H384.042V52.5044V33.823L403.822 53.566Z" stroke="white" strokeWidth="3"/>
          <path d="M325.307 4.89358L325.307 4.89356L325.301 4.89716C320.972 7.16758 317.528 10.3404 314.997 14.4044C312.45 18.4453 311.187 23.0022 311.187 28.0327C311.187 33.0646 312.451 37.6227 314.999 41.6645C317.532 45.6822 320.976 48.8294 325.301 51.0981L325.31 51.103L325.319 51.1077C329.698 53.3263 334.525 54.4251 339.774 54.4251C345.908 54.4251 351.336 53.1146 356.009 50.4405L356.009 50.4406L356.019 50.4346C360.706 47.7028 364.141 43.835 366.292 38.8661L367.199 36.7701H364.916H356.431H355.513L355.096 37.5876C353.725 40.2702 351.756 42.3166 349.167 43.7593C346.633 45.1536 343.522 45.8857 339.774 45.8857C336.202 45.8857 333.049 45.1382 330.278 43.6752C327.513 42.2147 325.358 40.1661 323.789 37.5116C322.229 34.8269 321.426 31.6832 321.426 28.0327C321.426 24.3292 322.232 21.1894 323.786 18.5582L323.786 18.5583L323.791 18.5492C325.363 15.8468 327.517 13.7781 330.278 12.32C333.049 10.8571 336.202 10.1096 339.774 10.1096C343.516 10.1096 346.622 10.8627 349.153 12.2984L349.153 12.2984L349.163 12.3041C351.754 13.7469 353.724 15.794 355.096 18.4777L355.513 19.2952H356.431H364.916H367.19L366.294 17.2043C364.145 12.1891 360.71 8.29484 356.019 5.56067C351.345 2.83599 345.913 1.5 339.774 1.5C334.52 1.5 329.688 2.62445 325.307 4.89358Z" stroke="white" strokeWidth="3"/>
          <path d="M266.933 54.0044H267.947L268.325 53.0627L272.306 43.1359H293.939L297.921 53.0627L298.298 54.0044H299.313H306.785H309.005L308.177 51.9448L288.64 3.35201L288.262 2.41155H287.248H279.075H278.063L277.684 3.35009L258.07 51.9429L257.237 54.0044H259.461H266.933ZM275.526 34.947L283.123 15.8271L290.72 34.947H275.526Z" stroke="white" strokeWidth="3"/>
          <path d="M252.291 3.63108V2.13108H250.791H243.708H242.208V3.63108V23.5877H217.576V3.63108V2.13108H216.076H208.993H207.493V3.63108V52.5044V54.0044H208.993H216.076H217.576V52.5044V31.8466H242.208V52.5044V54.0044H243.708H250.791H252.291V52.5044V3.63108Z" stroke="white" strokeWidth="3"/>
          <path d="M197.44 25.1578V23.6578H195.94H177.67V10.3199H198.275H199.775V8.81993V3.56097V2.06097H198.275H169.086H167.586V3.56097V52.5044V54.0044H169.086H198.275H199.775V52.5044V47.2454V45.7454H198.275H177.67V31.9167H195.94H197.44V30.4167V25.1578Z" stroke="white" strokeWidth="3"/>
          <path d="M150.854 53.566L151.293 54.0044H151.913H161.176H164.842L162.227 51.4346L138.479 28.0962L162 4.69443L164.577 2.13108H160.942H151.991H151.365L150.925 2.57589L131.074 22.6319V3.63108V2.13108H129.574H122.491H120.991V3.63108V52.5044V54.0044H122.491H129.574H131.074V52.5044V33.823L150.854 53.566Z" stroke="white" strokeWidth="3"/>
          <path d="M74.0902 54.0044H75.1047L75.4824 53.0627L79.4636 43.1359H101.097L105.078 53.0627L105.456 54.0044H106.47H113.942H116.162L115.334 51.9448L95.7972 3.35201L95.4191 2.41155H94.4055H86.2327H85.2205L84.8417 3.35009L65.2269 51.9429L64.3948 54.0044H66.6179H74.0902ZM82.6828 34.947L90.2801 15.8271L97.8774 34.947H82.6828Z" stroke="white" strokeWidth="3"/>
          <path d="M59.5303 3.98168V2.48168H58.0303H50.4802H49.5505L49.1368 3.31429L30.5541 40.7187L11.9713 3.31429L11.5577 2.48168H10.628H3H1.5V3.98168V52.5044V54.0044H3H10.0831H11.5831V52.5044V22.6528L26.7195 53.1709L27.1329 54.0044H28.0633H33.0449H33.9762L34.3893 53.1696L49.4472 22.7367V52.5044V54.0044H50.9472H58.0303H59.5303V52.5044V3.98168Z" stroke="white" strokeWidth="3"/>
        </svg>
      </div>
      <div id="ele" className="w-full absolute bottom-0 h-0 bg-white"></div>
      <div ref={webRef} id="web" className="w-full h-0 absolute bottom-0 bg-[#ebfffe] ">
        <RecoilRoot>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={
                <React.Suspense fallback={"loading..."}>
                  <Landing />
                </React.Suspense>
                } />
              <Route path="/login" element={
                <React.Suspense fallback={"loading..."}>
                  <Login />
                </React.Suspense>
                } />
              <Route path="/signup" element={
                <React.Suspense fallback={"loading..."}>
                  <SignUp />
                </React.Suspense>
                } />
              <Route path="/courses" element={
                <React.Suspense fallback={"loading..."}>
                  <AllCourses />
                </React.Suspense>
              } />
              <Route path="/course/:courseId" element={
                <React.Suspense fallback={"loading..."}>
                  <Course />
                </React.Suspense>
              } />
              <Route path="/teaching" element={
                <React.Suspense fallback={"loading..."}>
                  <Teaching />
                </React.Suspense>
              } />
              <Route path="/admin/dashboard" element={
                <React.Suspense fallback={"loading..."}>
                  <AdminDashboard />
                </React.Suspense>
              } />
              <Route path="/admin/addCourse" element={
                <React.Suspense fallback={"loading..."}>
                  <AddCourse />
                </React.Suspense>
              } />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </div>
    </div>
  )
}

export default App
