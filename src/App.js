import React from 'react';
import './App.css';
import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { BooksProvider } from './context/BooksContext';
import Header from './components/Header';
import Footer from './components/Footer.js';
import SideBar from './components/SideBar.js';
import Main from './components/Main.js';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <CartProvider>
      <BooksProvider>
        <div className='App'>
          <header className='App_header'>
            <Header></Header>
          </header>
          <div className='App_container'>
            <aside className='App_sidebar'>
              <SideBar setSearchTerm={setSearchTerm}/>
            </aside>
            <main className='App_main'>
              <Main searchTerm={searchTerm}/>
            </main>
          </div>
          <Footer></Footer>
        </div>
      </BooksProvider>
    </CartProvider>
  );
}

export default App;