import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Homepage } from "./pages/Homepage";
import ProblemList from "./pages/ProblemList";
import Problem from "./pages/Problem";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/problemlist' element={<ProblemList />} />
        <Route path='/problem/:id' element={<Problem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
