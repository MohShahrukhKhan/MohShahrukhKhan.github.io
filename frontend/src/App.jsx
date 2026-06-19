import "@/App.css";
import "@/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/portfolio/Navbar";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Experience from "./components/portfolio/Experience";
import Projects from "./components/portfolio/Projects";
import Performance from "./components/portfolio/Performance";
import AIWorkflow from "./components/portfolio/AIWorkflow";
import Skills from "./components/portfolio/Skills";
import SystemDesign from "./components/portfolio/SystemDesign";
import GitHubActivity from "./components/portfolio/GitHubActivity";
import Testimonials from "./components/portfolio/Testimonials";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";

function Portfolio() {
  return (
    <div data-testid="portfolio-root" className="relative bg-[#050505] text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Performance />
        <AIWorkflow />
        <Skills />
        <SystemDesign />
        <GitHubActivity />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" richColors closeButton />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
