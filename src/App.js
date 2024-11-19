import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import KNNPage from './pages/KNNPage';
import SVDPage from './pages/SVDPage';
import ALSPage from './pages/ALSPage';

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/KNNPage" element={<KNNPage />} />
        <Route path="/SVDPage" element={<SVDPage />} />
        <Route path="/ALSPage" element={<ALSPage />} />
      </Routes>
    </Router>
  );
}

export default App;
