import "./App.css"
// import "./styles/css/main.min.css"
import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
import Register from "./components/authentication/Register"
import Login from "./components/authentication/Login"
import Home from "./components/common/Home"
import Navbar from "./components/common/Navbar"
import About from "./components/common/About"
import AllRecipes from "./components/recipe-components/AllRecipes"
import IdeasAndSuggestions from "./components/recipe-components/IdeasAndSuggestions"
// import RecipeCard from "./components/recipe-components/RecipeCard"
import RecipePage from "./components/recipe-components/RecipePage"
import 'bootstrap/dist/css/bootstrap.min.css';




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
            <Route path="/all-recipes" element={<AllRecipes />} />
            <Route path="/all-recipes/:id" element={<RecipePage />} />
            <Route path="/menuideas" element={<IdeasAndSuggestions />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

