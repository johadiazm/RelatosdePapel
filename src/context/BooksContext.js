
import React, { createContext } from 'react';
import useFetchBooks from '../hooks/UseFetchBooks';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const { books, loading, error } = useFetchBooks('programming'); // Puedes cambiar 'programming' por cualquier término de búsqueda

  return (
    <BooksContext.Provider value={{ books, loading, error }}>
      {children}
    </BooksContext.Provider>
  );
};