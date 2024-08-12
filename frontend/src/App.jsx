import React from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from "recoil";
const Login = React.lazy(() => import("./component/Login"));
const SignUp = React.lazy(() => import("./component/SignUp"));
const NavBar = React.lazy(() => import("./component/NavBar"));
const Landing = React.lazy(() => import("./component/Landing"));


function App() {

  return (
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
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
