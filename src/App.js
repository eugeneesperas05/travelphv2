import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Destination from "./components/pages/Destination";
import TravelIsnpiration from "./components/pages/TravelIsnpiration";
import News from "./components/pages/News";
import Events from "./components/pages/Events";
import Map from "./components/pages/Map";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Banaue from "./components/trials/Banaue";
import Sagada from "./components/trials/Sagada";
import Pulag from "./components/trials/Pulag";
import Baguio from "./components/trials/Baguio";
import Batanes from "./components/trials/Batanes";
import Vigan from "./components/trials/Vigan";
import Pagudpud from "./components/trials/Pagudpud";
import Anawangin from "./components/trials/Anawangin";
import Coron from "./components/trials/Coron";
import Boracay from "./components/trials/Boracay";
import Chocolate from "./components/trials/Chocolate";
import Sumilon from "./components/trials/Sumilon";
import Kalanggaman from "./components/trials/Kalanggaman";
import Osmena from "./components/trials/Osmena";
import Sohoton from "./components/trials/Sohoton";
import Canigao from "./components/trials/Canigao";
import Bantayan from "./components/trials/Bantayan";
import Kawasan from "./components/trials/Kawasan";
import ApoIsland from "./components/trials/ApoIsland";
import Siargao from "./components/trials/Siargao";
import Camiguin from "./components/trials/Camiguin";
import Enchanted from "./components/trials/Enchanted";
import Tinuy from "./components/trials/Tinuy";
import Mayon from "./components/trials/Mayon";
import MountApo from "./components/trials/MountApo";
import Samal from "./components/trials/Samal";
import Dahican from "./components/trials/Dahican";
import Asik from "./components/trials/Asik";
import Britania from "./components/trials/Britania";
import Lake from "./components/trials/Lake";
import Dive from "./components/trials/Dive";
import Adventure from "./components/trials/Adventure";
import Sun from "./components/trials/Sun";
import Nature from "./components/trials/Nature";
import Food from "./components/trials/Food";
import Culture from "./components/trials/Culture";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/TravelInspiration" element={<TravelIsnpiration />} />
          <Route path="/News" element={<News />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/Banaue" element={<Banaue />} />
          <Route path="/Sagada" element={<Sagada />} />
          <Route path="/Pulag" element={<Pulag />} />
          <Route path="/Baguio" element={<Baguio />} />
          <Route path="/Batanes" element={<Batanes />} />
          <Route path="/Vigan" element={<Vigan />} />
          <Route path="/Pagudpud" element={<Pagudpud />} />
          <Route path="/Anawangin" element={<Anawangin />} />
          <Route path="/Coron" element={<Coron />} />
          <Route path="/Boracay" element={<Boracay />} />
          <Route path="/Chocolate" element={<Chocolate />} />
          <Route path="/Sumilon" element={<Sumilon />} />
          <Route path="/Kalanggaman" element={<Kalanggaman />} />
          <Route path="/Osmena" element={<Osmena />} />
          <Route path="/Sohoton" element={<Sohoton />} />
          <Route path="/Canigao" element={<Canigao />} />
          <Route path="/Bantayan" element={<Bantayan />} />
          <Route path="/Kawasan" element={<Kawasan />} />
          <Route path="/Mayon" element={<Mayon />} />
          <Route path="/ApoIsland" element={<ApoIsland />} />
          <Route path="/Siargao" element={<Siargao />} />
          <Route path="/Camiguin" element={<Camiguin />} />
          <Route path="/Enchanted" element={<Enchanted />} />
          <Route path="/Tinuy" element={<Tinuy />} />
          <Route path="/MountApo" element={<MountApo />} />
          <Route path="/Samal" element={<Samal />} />
          <Route path="/Dahican" element={<Dahican />} />
          <Route path="/Asik" element={<Asik />} />
          <Route path="/Britania" element={<Britania />} />
          <Route path="/Lake" element={<Lake />} />
          <Route path="/Dive" element={<Dive />} />
          <Route path="/Adventure" element={<Adventure />} />
          <Route path="/Sun" element={<Sun />} />
          <Route path="/Nature" element={<Nature />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Culture" element={<Culture />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
