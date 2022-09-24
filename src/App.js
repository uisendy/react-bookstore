import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Books from './Components/Books';
import ErrorPage from './pages/ErrorPage';

const App = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  </>
);
export default App;
