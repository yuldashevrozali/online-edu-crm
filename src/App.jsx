import React from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Sidebar from './components/sidebar';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const showHeaderAndSidebar = location.pathname !== '/arab-tili';

  return (
    <>
      {showHeaderAndSidebar && <Header />}
      <div className='sidebar-hero'>
        {showHeaderAndSidebar && <Sidebar />}
        <Hero />
      </div>
    </>
  );
}

export default App;
