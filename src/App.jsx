import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Display from "./pages/Display";
import Movies from "./pages/Movies";
import Browser from "./pages/Browser";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/display" element={<Display />}></Route>
        <Route path="/browser" element={<Browser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
