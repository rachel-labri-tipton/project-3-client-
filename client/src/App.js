import "./App.css"
import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
import Register from "./components/authentication/Register"
import Login from "./components/authentication/Login"
import Home from "./components/common/Home"
import Navbar from "./components/common/Navbar"
import About from "./components/common/About"
// import AllRecipes from "./components/AllRecipes"
// import { useState } from "react"
import RecipeCard from "./components/recipe-components/RecipeCard"

function App() {

  return (
    <div className="App">
      <Navbar />
      <RecipeCard />
      <Router>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        </Routes>
    </Router>
    </div>
  )
}



export default App
