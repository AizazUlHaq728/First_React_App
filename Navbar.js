import React, { useState } from 'react'; // Import useState
import './index.css'; // Import the CSS file

function Navbar() {
  const [isloggedin, setIsLoggedin] = useState(true); // Use useState to manage the logged in state

  function toggleLoggedin() {
    setIsLoggedin(prevIsLoggedin => !prevIsLoggedin); // Toggle the logged in state
  }

  return (
    <nav className="nav-container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

      <img src={require('./Formalmf.jpeg')} alt="Logo" className='avatar' />
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>

        <button onClick={toggleLoggedin}>
          {isloggedin ? 'Logged In' : 'Logged Out'} 
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
