import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// pages & components
import NavBar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SpecimensExplorer from './pages/SpecimensExplorer.jsx'
import AddProduct from './pages/AddProduct.jsx'
import SpecimenDetail from './pages/SpecimenDetail.jsx'
import UpdateProduct from './pages/UpdateProduct.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/SpecimensExplorer" element={<SpecimensExplorer />} />
            <Route path="/specimen/:id" element={<SpecimenDetail />} />
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/UpdateProduct/:id" element={<UpdateProduct />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
