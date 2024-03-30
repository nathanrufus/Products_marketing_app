import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Crops from "./components/Crops"
import Home from "./components/Home"
import Details from "./components/Details"
import Create from "./components/Create"
import Fruits from "./components/Fruits"
import Animals from "./components/Animals"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import Profile from "./components/Profile"

function App() {
  return < >

    <Navbar />
    <Routes>
      <Route path="/details" element={<Details />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/crops" element={<Crops />} />
      <Route path="/create" element={<Create />} />
      <Route path="/fruits" element={<Fruits />} />
      <Route path="/animals" element={<Animals />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>

    <Footer /> *
    {/* <Crops /> */}
    {/* <Fruits />
    <Animals />
    
   <Create/> */}
  </>
}

export default App
