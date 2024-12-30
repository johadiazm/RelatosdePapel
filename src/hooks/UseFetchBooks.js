import { useState, useEffect } from 'react';

const useFetchBooks = (query) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const booksData = data.items
          .filter(item => item.saleInfo && item.saleInfo.listPrice) // Filtrar libros que tienen precio
          .map(item => ({
            id: item.id,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',
            price: item.saleInfo.listPrice.amount,
            image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x195.png?text=No+Image'
          }));
        setBooks(booksData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query]);

  return { books, loading, error };
};

export default useFetchBooks;