import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCourses from "./component/AllCourses";
import Teaching from "./pages/Teaching";
import AdminDashboard from "./pages/AdminDashboard";
import NavBar from "./component/NavBar";
import AddCourse from "./component/AddCourse";
const Course = React.lazy(() => import("./component/Course"));
const Login = React.lazy(() => import("./pages/Login"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const Landing = React.lazy(() => import("./pages/Landing"));

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={"loading..."}>
              <Landing />
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={"loading..."}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <React.Suspense fallback={"loading..."}>
              <SignUp />
            </React.Suspense>
          }
        />
        <Route
          path="/courses"
          element={
            <React.Suspense fallback={"loading..."}>
              <AllCourses />
            </React.Suspense>
          }
        />
        <Route
          path="/course/:courseId"
          element={
            <React.Suspense fallback={"loading..."}>
              <Course />
            </React.Suspense>
          }
        />
        <Route
          path="/teaching"
          element={
            <React.Suspense fallback={"loading..."}>
              <Teaching />
            </React.Suspense>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <React.Suspense fallback={"loading..."}>
              <AdminDashboard />
            </React.Suspense>
          }
        />
        <Route
          path="/admin/addCourse"
          element={
            <React.Suspense fallback={"loading..."}>
              <AddCourse />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
