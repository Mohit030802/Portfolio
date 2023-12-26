import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "./app.css";
import { motion, useScroll } from "framer-motion";
function Section({ children }) {
  const { scrollYProgress } = useScroll();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}
export default function App() {
  return (
    <div className="bg-[#0a192f]">
      <Section><Navbar/></Section>
      <Section><Home/></Section>
      <Section><About/></Section>
      <Section><Skills/></Section>
      <Section><Works/></Section>
      <Section><Contact/></Section>
    </div>
  );
}

