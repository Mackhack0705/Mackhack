import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCourses from "@/components/AllCourses.js";
import Teaching from "@/pages/Teaching.js";
import AdminDashboard from "@/pages/AdminDashboard.js";
import NavBar from "@/components/NavBar.js";
import AddCourse from "@/components/AddCourse.js";
import AboutUs from "@/pages/AboutUs.js";
import Contact from "@/pages/Contact.js";
import LoginFailed from "@/pages/LoginFailed.js";
const Course = React.lazy(() => import("@/components/Course.js"));
const Login = React.lazy(() => import("@/pages/Login.js"));
const SignUp = React.lazy(() => import("@/pages/SignUp.js"));
const Landing = React.lazy(() => import("@/pages/Landing.js"));
import Loader from "@/components/Loader.js";
import { Toaster } from "sonner";
import EmailVerified from "./pages/EmailVerified.js";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loader />}>
                <Landing />
              </React.Suspense>
            }
          />
          <Route
            path="/sign-in"
            element={
              <React.Suspense fallback={<Loader />}>
                <Login />
              </React.Suspense>
            }
          />
          <Route
            path="/sign-up"
            element={
              <React.Suspense fallback={<Loader />}>
                <SignUp />
              </React.Suspense>
            }
          />
          <Route
            path="/courses"
            element={
              <React.Suspense fallback={<Loader />}>
                <AllCourses />
              </React.Suspense>
            }
          />
          <Route
            path="/course/:courseId"
            element={
              <React.Suspense fallback={<Loader />}>
                <Course />
              </React.Suspense>
            }
          />
          <Route
            path="/teaching"
            element={
              <React.Suspense fallback={<Loader />}>
                <Teaching />
              </React.Suspense>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <React.Suspense fallback={<Loader />}>
                <AdminDashboard />
              </React.Suspense>
            }
          />
          <Route
            path="/admin/addCourse"
            element={
              <React.Suspense fallback={<Loader />}>
                <AddCourse />
              </React.Suspense>
            }
          />
          <Route
            path="/aboutUs"
            element={
              <React.Suspense>
                <AboutUs />
              </React.Suspense>
            }
          />
          <Route
            path="/contactUs"
            element={
              <React.Suspense>
                <Contact />
              </React.Suspense>
            }
          />
          <Route
            path="/loginFailed"
            element={
              <React.Suspense>
                <LoginFailed />
              </React.Suspense>
            }
          />
          <Route
            path="/email-verified"
            element={
              <React.Suspense>
                <EmailVerified />
              </React.Suspense>
            }
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
