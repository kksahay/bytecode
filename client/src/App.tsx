import { Routes, Route } from "react-router-dom";
import Problemset from "./pages/Problemset";
import ProblemPage from "./pages/Problem";
import "./App.css"
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Problemset />} />
      <Route path='/problemset/task/:id' element={<ProblemPage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Pagenotfound />} />
    </Routes>
  )
}

export default App
