import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Problemset from "./pages/ProblemList";
import Problem from "./pages/Problem";
import "./App.css"
import Pagenotfound from "./pages/Pagenotfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/problemset' element={<Problemset />} />
        <Route path='/problemset/task/:id' element={<Problem />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
