import './App.css'
import React from 'react';

import { Routes, Route, HashRouter } from 'react-router';

import LandingPage from './components/LandingPage'
import Courses from './components/Courses';
import Books from './components/Books';
import Merch from './components/Merch';

function App() {

return (
  <HashRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/books" element={<Books />} />
      <Route path="/merch" element={<Merch />} />
    </Routes>
  </HashRouter>
)}

export default App