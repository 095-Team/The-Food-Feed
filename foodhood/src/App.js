import * as IoIcons5 from "react-icons/io5";
import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import something from "./foodhublogo.png"
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img className='foodhublogo' src={something} alt="logo"/>
        <Link className="headerbuttons" to="/Profile" onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}>
              <span className="profile-link">
                {isHovered ? <IoIcons5.IoPerson/> : <IoIcons5.IoPersonOutline/>}
              </span>
        </Link>
          {/* <h2 className='headertitle1'>Food</h2><h1 className='headertitle2'>Hub</h1> */}
          
        
        
      </header>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/Login"element={<Login/>}/>
      </Routes>
      {/* <footer  className='footer'>
        gjhgjgjhg
      </footer> */}
    </div>
  );
}

export default App;
