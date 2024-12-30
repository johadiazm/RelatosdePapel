/*import React from 'react';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';

import useFetchBooks from '../hooks/useFetchBooks';


const Galery = () => {
  const { books } = useContext(BooksContext);
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <h1>Galeria de libros</h1>
      <div className='App_gallery-books'>
        {books.map((book, index) => (
          <div key={index} className='App_book-container'>
            <img src={book.image} alt={`Image of ${book.title}`} style={{ margin: '5px' }} />
            <Book title={book.title} author={book.author} price={book.price} />
            <Link to={`/detail-book/${book.id}`}><button>Detalle</button></Link>
            <button onClick={() => addToCart({ id: book.id, title: book.title, author: book.author, price: book.price, image: book.image })}>Agregar al carro</button>
          </div>
        ))}
         
      </div>
    </div>
  );
//};
export default Galery;*/


import React from 'react';
import Book from './Book';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import useFetchBooks from '../hooks/UseFetchBooks';

const Galery = ({ searchTerm }) => {
  //const { books, loading, error } = useFetchBooks(searchTerm);

  const { addToCart } = useContext(CartContext);
  const { books, loading, error } = useFetchBooks('programming'); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Galeria de libros</h1>
      <div className='App_gallery-books'>
        {books.map((book, index) => (
          <div key={index} className='App_book-container'>
            <img src={book.image} alt={`Image of ${book.title}`} style={{ margin: '5px' }} />
            <Book title={book.title} author={book.author} price={book.price} />
            <Link to={`/detail-book/${book.id}`}><button>Detalle</button></Link>
            <button onClick={() => addToCart({ id: book.id, title: book.title, author: book.author, price: book.price, image: book.image })}>
              Agregar al carro
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galery;
