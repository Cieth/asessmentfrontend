import React from 'react';

const Card = () => {
  const user = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  return (
    <div className='Card__body'>
      <img className='Card__image' src={`${user.image}`} alt='img' />
      <p className='Card__title'>{user.title}</p>
      <div className='Card__interact'>
        <span className='Card__counter'>01:00:00</span>
        <button className='Card__button'> Go to detail</button>
      </div>
    </div>
  );
};

export default Card;
