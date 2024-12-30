import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BooksContext } from '../context/BooksContext';
import { useContext } from 'react';

const Book = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { books } = useContext(BooksContext);
  

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Busqueda de libros</h1>
      <input 
        type="text"
        placeholder="Search for a title ..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredBooks.map((book, index) => (
           <Link to={`/detail-book/${book.id}`} key={book.id}>
            <li>{book.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Book;