import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Car = () => {
  const { cart, removeFromCart} = useContext(CartContext);
  

  // Agrupar libros por id y calcular la cantidad y el total por libro
  const groupedCart = cart.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, quantity: 0 };
    }
    acc[item.id].quantity += 1;
    return acc;
  }, {});

  // Convertir el objeto agrupado en un array
  const cartItems = Object.values(groupedCart);

  // Calcular el total general
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='App_cart'>
      <Link to="/"><h3>Seguir comprando</h3></Link>
      <h2>Resumen de compra</h2>
      {cartItems.map((item, index) => (
        <div key={index} className='App_cart-items'>
          <h4>{item.title}</h4>
          <p>Price: €{item.price} x {item.quantity} = {item.price * item.quantity}</p>
          <button className='button_delete' onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: €{total}</h3>
      <button className='button_cart' onClick={() => alert('Compra realizada con éxito')}>Comprar</button>
    </div>
  );
};

export default Car;