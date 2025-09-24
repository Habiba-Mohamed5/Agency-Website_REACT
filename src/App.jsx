// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/OurServices/Services";
import Projects from "./pages/Projects/Projects";
import Careers from "./pages/Careers/Careers";
import Blogs from "./pages/Blogs/Blogs";
import "./App.css";



function App() {
   

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1 mt-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers/>} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
