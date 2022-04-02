import "./App.css"
// import "./styles/css/main.min.css"
import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./components/authentication/Login"
import Home from "./components/common/Home"
import Navbar from "./components/common/Navbar"
import About from "./components/common/About"
import AllRecipes from "./components/recipe-components/AllRecipes"
import IdeasAndSuggestions from "./components/recipe-components/IdeasAndSuggestions"
import IdeaPage from "./components/recipe-components/IdeaPage"
import RecipePage from "./components/recipe-components/RecipePage"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/all-recipes" element={<AllRecipes />} />
              <Route path="/all-recipes/:id" element={<RecipePage />} />
              <Route path="/menuideas" element={<IdeasAndSuggestions />} />
              <Route path="/menuideas/:recipeType" element={<IdeaPage />} />
            </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

