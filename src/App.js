import React from 'react';
import Header from './Components/Header';
import Card from './Components/Cards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import background from './images/background.png';
import ContactUs from './Components/ContactUs';
import './App.css';

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
