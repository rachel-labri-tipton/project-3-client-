import "./App.css"
import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
import Register from "./components/authentication/Register"
import Login from "./components/authentication/Login"
import Home from "./components/common/Home"
import About from "./components/common/About"
// import AllRecipes from "./components/AllRecipes"
// import { useState } from "react"

function App() {

  return (
    <div className="App">
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About/>} />
          
        </Routes>
      </Router>
    </div>
  )
}



export default App
