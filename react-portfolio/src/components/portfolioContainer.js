import React, { useState } from 'react';
import Navbar from './Navbar';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './Header';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('aboutMe');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'aboutMe') {
        return (
            <div>
                <Header/>
                <AboutMe/>
            </div>
          );
    }
    if (currentPage === 'portfolio') {
        return (
            <div>
                <Header/>
                <Portfolio/>
            </div>
          );
    }
    if (currentPage === 'contact') {
        return (
            <div>
                <Header/>
                <Contact/>
            </div>
          );
    }
    if (currentPage === 'resume') {
        return (
            <div>
                <Header/>
                <Resume/>
            </div>
        )
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}
