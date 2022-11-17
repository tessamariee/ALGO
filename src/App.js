import React from 'react';
import Header from './Components/Header';
import Card from './Components/Cards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Routes>   
        <Route path='/' element={<Header />} />      
        </Routes>
    </Router>
    
    </>
  );
}

export default App;
