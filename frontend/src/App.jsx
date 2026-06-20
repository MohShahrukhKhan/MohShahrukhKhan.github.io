import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/portfolio/Navbar";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Experience from "./components/portfolio/Experience";
import CaseStudies from "./components/portfolio/CaseStudies";
import Performance from "./components/portfolio/Performance";
import Skills from "./components/portfolio/Skills";
import SystemDesign from "./components/portfolio/SystemDesign";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";

function Portfolio() {
  return (
    <div className="relative bg-[#07080c] text-[#f1f5f9] antialiased">
      <div className="grain fixed inset-0 pointer-events-none z-0" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <CaseStudies />
          <Performance />
          <Skills />
          <SystemDesign />
          <Contact />
        </main>
        <Footer />
      </div>
      <Toaster position="bottom-right" theme="dark" richColors closeButton />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
