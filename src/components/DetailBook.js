import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BooksContext } from '../context/BooksContext';
import { CartContext } from '../context/CartContext'; 

const DetailBook = () => {
  const { id } = useParams();
  const { books } = useContext(BooksContext);
  const { addToCart } = useContext(CartContext);
  const book = books.find((book) => book.id === id);

  if (!book) {
    return <div>Libro no encontrado</div>;
  }

  return (
    <div>
      <img src={book.image} alt={`Image of ${book.title}`} style={{ margin: '5px' }} />
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Price: ${book.price}</p>
      <button onClick={() => addToCart({ id: book.id, title: book.title, author: book.author, price: book.price, image: book.image })}>Agregar al carro</button>
    </div>
  );
};

export default DetailBook;