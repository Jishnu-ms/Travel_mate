import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Secondpage from './components/Secondpage';
import BookNow from './components/BookNow';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Navbar onNavigate={setCurrentPage} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <Secondpage />}
      {currentPage === 'book' && <BookNow />}
      {currentPage === 'contact' && <ContactPage />}
    </>
  );
}

export default App;
