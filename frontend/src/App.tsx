import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCourses from "./components/AllCourses";
import Teaching from "./pages/Teaching";
import AdminDashboard from "./pages/AdminDashboard";
import NavBar from "./components/NavBar";
import AddCourse from "./components/AddCourse";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import LoginFailed from "./pages/LoginFailed";
const Course = React.lazy(() => import("./components/Course"));
const Login = React.lazy(() => import("./pages/Login"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const Landing = React.lazy(() => import("./pages/Landing"));
import { Toaster } from "@/components/ui/toaster";
import Loader from "./components/Loader";

function App() {
  return (
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
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
