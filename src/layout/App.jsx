import React from 'react';
import Card from '../components/Card'
function App() {
  const url = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  title='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price=109.95,
  stars=[true,true,true,false,false]
  return ( <div>
    <Card   imgURL= {url}
            productName={title}
            price={price}
            stars={stars} />
  </div> );
}

export default App;
