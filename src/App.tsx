import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeProvider from "./context/ThemeContext";
import LearningJourney from "./components/learning";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 z-50"
          style={{ width: `${scrollProgress}%` }}
        />
        <Header />
        <main>
          <Hero />
          <About />
          <LearningJourney />
          <Skills />
          <Projects />
          <Contact />
       
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
