// import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import BlogsPosts from './pages/blogs-overzicht/BlogPosts';
import Blogs from './pages/blogpost/Blogs';
function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  // const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs-overzicht" element={<BlogsPosts />} />
        <Route path="/blogs-overzicht/:blogId" element={<Blogs />} />
      </Routes>
    </>
  );
}

export default App;