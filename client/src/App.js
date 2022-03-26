import "./App.css"
import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
import Register from "./components/authentication/Register"
import Login from "./components/authentication/Login"
import Home from "./components/common/Home"
import Navbar from "./components/common/Navbar"
import About from "./components/common/About"
import RecipeCard from "./components/recipe-components/RecipeCard"
// import AllRecipes from "./components/AllRecipes"
// import { useState } from "react"
<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>



function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

