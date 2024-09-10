import React, { useEffect } from 'react';
import './index.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Free from '../free-cources';
import Paid from '../paid-cources';
import Books from '../books';
import Arab from '../arabtili';
import Arabtili from '../cours-arab';

export default function Hero() {
  const location = useLocation();

  useEffect(() => {
    console.log(`Navigated to ${location.pathname}`);
  }, [location]);

  return (
    <div className='hero'>
      <Routes>
        <Route path='/free' element={<Free />} />
        <Route path='/money' element={<Paid />} />
        <Route path='/books' element={<Books />} />
        <Route path='/arab' element={<Arab />} />
        <Route path='/arab-tili' element={<Arabtili />} />
      </Routes>
    </div>
  );
}
