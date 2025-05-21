import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// pages & components
import NavBar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SpecimensExplorer from './pages/SpecimensExplorer.jsx'
import AddArtifact from './pages/AddArtifact.jsx'
import SpecimenDetail from './pages/SpecimenDetail.jsx'
import UpdateProduct from './pages/UpdateProduct.jsx'
import LoginForm from './pages/forms/LoginForm.jsx'
import ProtectedRoutes from './utils/protectedRoutes.jsx'

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
            <Route path="/AddArtifact" element={<AddArtifact />} />
            <Route path="/UpdateProduct/:id" element={<UpdateProduct />} />
            <Route path="/LoginForm" element={<LoginForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
