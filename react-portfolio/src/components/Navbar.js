import React from 'react';

import '../styles/Navbar.css';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className='navbar'>
      <a id='aboutMe' href="#aboutMe" onClick={() => handlePageChange('aboutMe')} className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}>About me</a>
      <a id='portfolio' href="#portfolio" onClick={() => handlePageChange('portfolio')} className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
      <a id='contact' href="#contact" onClick={() => handlePageChange('contact')} className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
      <a id='resume' href="#resume" onClick={() => handlePageChange('resume')} className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
    </div>
  );
}

export default Navbar;
