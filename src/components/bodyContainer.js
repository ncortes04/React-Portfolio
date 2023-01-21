import React, { useState } from 'react';
import About from './pages/aboutMe';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Header from './header';
import Footer from './footer';
function BodyContainer(){
const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/> 
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}


    </div>
  );
}

export default BodyContainer