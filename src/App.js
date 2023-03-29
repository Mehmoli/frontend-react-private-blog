// import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import BlogsPosts from './pages/blogs-overzicht/BlogPosts';
import Blogs from './pages/blogpost/Blogs';
import React, { useState } from 'react';

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
    <>
      <Navigation isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login toggleAuth={toggleIsAuthenticated} />} />
        <Route path="/blogs-overzicht" element={<BlogsPosts />} />
        <Route path="/blogs-overzicht/:blogId" element={isAuthenticated ? <Blogs /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;