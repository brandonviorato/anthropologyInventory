import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import NavBar from "./components/Navbar.js";
import Dashboard from "./pages/Dashboard.js";
import SpecimensExplorer from "./pages/SpecimensExplorer.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <div>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/SpecimensExplorer" element={<SpecimensExplorer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
