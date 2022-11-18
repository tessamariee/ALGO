import React from 'react';
import Navbar from './Navbar';
import Body from './Body';
//import headerimg from '../images/header.png';
function Header() {
  return (
    <>
    <div id='main'>
      <Navbar/>
      <div className='name'>
        <h1><span>Algo Filipino </span></h1>
        <h1>Wika at Teknolohiya </h1>
        <p className='details'>Ang Algo Filipino ay isang non-profit na organisasyon na naglalayong mapalago at mapagyaman ang wikang Filipino sa larangan ng teknolohiya. </p>
        <img src='../images/header.png'></img>
        <a href='#' className='cv-btn'>SUMALI SA ALGOFILIPINO</a>
      </div>
      
    </div>
    <Body/>
    </>
  )
}

export default Header
