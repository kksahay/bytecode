import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Problemset from "./pages/ProblemList";
import Problem from "./pages/Problem";
import "./App.css"
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/problemset' element={<Problemset />} />
      <Route path='/problemset/task/:id' element={<Problem />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Pagenotfound />} />
    </Routes>
  )
}

export default App
