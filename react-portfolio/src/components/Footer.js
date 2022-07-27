import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Footer.css';

function Footer() {
  return (
    <header className="footer">
      <div  id="linkContainer">
        <a href="https://www.linkedin.com/in/justin-stone-4071761ab/" className='links'>LinkedIn</a>
        <a href="https://github.com/Justinstone2001" className='links'>Github</a>
      </div>
    </header>
  );
}

export default Footer;
