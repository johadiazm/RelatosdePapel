import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='App_header'>
      <h1>Relatos de Papel</h1>
      <Link to="/car">
        <img src="shop.png" alt="Carrito de compras" className="App__img-car" />
      </Link>
    </header>
  );
};

export default Header;