import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { BooksContext } from '../context/BooksContext';


const Book = ({ id, title, author, price, image }) => {
  const { addToCart } = useContext(CartContext);
  useContext(BooksContext)

  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Price: €{price}</p>
    </div>
  );
};

export default Book;