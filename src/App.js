import React from 'react'
import Home from '../src/Pages/Home/Home.jsx'
import View_books from './Pages/View_book/View_books.js';
import Add_books from './Pages/Add_book/Add_books.js';

import EditBook from './Pages/EditBook/EditBook';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/view_book" element={<View_books />}></Route>
      <Route path="/add_book" element={<Add_books />}></Route>
      <Route path="/edit_book/:id" element={<EditBook />}></Route>
    </Routes>
  );
}

export default App;
