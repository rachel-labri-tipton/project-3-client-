import "./App.css"
import { Routes, Route, Link } from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
// import AllRecipes from "./components/AllRecipes"
import { useState } from "react"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all-recipes" element={<AllRecipes />} />
      </Routes>
    </div>
  )
}

const Home = () => {
  const [appData, setAppData] = useState(null)
  console.log(appData)
  return (
    <>
      <h1 onClick={() => setAppData("New data")}>
        Welcome to our recipe page
      </h1>
      {/* <Link to="/login">Login</Link>
      <Link to="/register">Register</Link> */}
    </>
  )
}

export default App
