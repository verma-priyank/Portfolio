
import './App.css';
import Home from './Routes/home';
import Contact from './Routes/contact';
import About from './Routes/about';
import Project from './Routes/project';
import {Routes , Route} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
    <Route  path="/" element={<Home />}/>
    <Route  path="/contact" element={<Contact />}/>
    <Route  path="/project" element={<Project />}/>
    <Route  path="/about" element={<About />}/>
    </Routes>
    </>
  );
}

export default App;
