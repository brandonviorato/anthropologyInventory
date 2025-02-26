import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import NavBar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import SpecimensExplorer from "./pages/SpecimensExplorer.jsx";
import AddProduct from "./components/AddProduct.jsx";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <div>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/Dashboard" element={<Dashboard />} />
                        <Route
                            path="/SpecimensExplorer"
                            element={<SpecimensExplorer />}
                        />
                        <Route path="/AddProduct" element={<AddProduct />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
