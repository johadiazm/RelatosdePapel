import React from 'react';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LandingPage.scss';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/galery');
    }, 5000); 
  
  return () => clearTimeout(timer);
}, [navigate]); 
  return (
    <div className="landing-page">
      <header className="landing-page__header">
        <h1>Bienvenido a Relatos de Papel</h1>
        <p>Explora nuestra colección de libros y encuentra tu próxima lectura favorita.</p>
        <Link to="/galery" className="landing-page__button">Explorar Libros</Link>
      </header>
      <section className="landing-page__features">
        <div className="feature">
          <h2>Gran Colección</h2>
          <p>Descubre una amplia variedad de libros de todos los géneros.</p>
        </div>
        <div className="feature">
          <h2>Fácil de Usar</h2>
          <p>Navega y encuentra libros fácilmente con nuestra interfaz intuitiva.</p>
        </div>
        <div className="feature">
          <h2>Compra Segura</h2>
          <p>Realiza tus compras de manera segura y confiable.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;