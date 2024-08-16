import React, { useCallback, useEffect, useState } from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from "recoil";
import NavBar from "./component/NavBar";
import MainNavBar from "./component/MainNavBar";
const Login = React.lazy(() => import("./component/Login"));
const SignUp = React.lazy(() => import("./component/SignUp"));
const Landing = React.lazy(() => import("./component/Landing"));


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!window.localStorage.getItem('token'));
  

  return (
    <RecoilRoot>
      <BrowserRouter>
      {window.localStorage.length ? <MainNavBar setIsLoggedIn={setIsLoggedIn} /> : <NavBar/>}
        <Routes>
          <Route path="/" element={
            <React.Suspense fallback={"loading..."}>
              <Landing />
            </React.Suspense>
            } />
          <Route path="/login" element={
            <React.Suspense fallback={"loading..."}>
              <Login setIsLoggedIn={setIsLoggedIn}/>
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
