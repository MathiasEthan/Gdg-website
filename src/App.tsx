// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/custom/navbar'; 
import Home from './pages/home';         

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505]">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;