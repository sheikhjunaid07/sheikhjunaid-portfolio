import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/AboutComponent/About";
import Contact from "./components/ContactComponent/Contact";
import Header from "./components/HeaderComponent/Header";
import Home from "./components/HomeComponent/Home";
import PortfolioSec from "./components/PortfolioComponent/PortfolioSec";
import Resume from "./components/ResumeComponent/Resume";
import Services from "./components/ServicesComponent/Services";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/portfolio" element={<PortfolioSec />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
     
    </>
  );
}

export default App;
