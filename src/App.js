import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";

import "./app.css";
import { motion, useScroll } from "framer-motion";
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-[#0a192f]">
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-[#ccd6f6]"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
