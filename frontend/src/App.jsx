import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, Outlet} from "react-router-dom";
import Nav from "./components/Nav"
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login";
import Search from "./pages/SearchResults";
import SignUp from "./pages/SignUp";
import PostDetails from './pages/PostDetails';
import Logout from './pages/Logout';
import Footer from "./components/Footer";
import './App.css'

function App() {
  const [tokenData, setTokenData] = useState();
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<HomePage />}>Home</Route>
      <Route path="/dashboard" element={<Dashboard />}>Dashboard</Route>
      <Route path="/login" element={<Login setTokenData={setTokenData}/>}>Log in</Route>
      <Route path="/search" element={<Search/>}></Route>
      <Route path="/search/:q" element={<Search/>}></Route>
      <Route path="/post" element={<PostDetails/>}></Route>
      <Route path="/post/:id" element={<PostDetails/>}></Route>
      <Route path="/signup" element={<SignUp setTokenData={setTokenData}/>}></Route>
      <Route path="/logout" element={<Logout setTokenData={setTokenData}/>}></Route>
    </Routes>
   
    <Footer />
    </>
  )
}

export default App
