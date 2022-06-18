import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";


function App() {
  return (
    <div>
     <Navbar/>
     <Home />
     <About/>
     <Skills/>
     <Works/>
     
    </div>
  );
}

export default App;
