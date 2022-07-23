import React from 'react';

import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <button type='button' className='navBtn'>About me</button>
      <button type='button' className='navBtn'>Portfolio</button>
      <button type='button' className='navBtn'>Contact</button>
      <button type='button' className='navBtn'>Resume</button>
    </div>
  );
}

export default Navbar;
