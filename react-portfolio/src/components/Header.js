import React, {useState} from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from "./pages/Resume";

export default function Header() {

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About/>;
    }
    if (currentPage === 'Contact'){
      return <Contact/>;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio/>;
    }
    if (currentPage === 'Resume') {
      return <Resume/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div className='header'>
        <h2>Bryan Dalton</h2>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
     
      {renderPage()}
    </div>
  )
}
