import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Galery from './Galery';
import DetailBook from './DetailBook';
import Car from './Car';
import LandingPage from './LandingPage';

const Main = ({ searchTerm }) => {
  return (
    <main className='App_main'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/galery" element={<Galery searchTerm={searchTerm} />} />
        <Route path="/detail-book/:id" element={<DetailBook />} />
        <Route path="/car" element={<Car />} />
      </Routes>
    </main>
  );
};

export default Main;