// import React from 'react';
import products from '../../data/products';

const Repeticao = () => {
  return (
    <div>
      <h1>Repetição</h1>
      <ul>
        {
          products.map(prod =>
            <li key={prod.id} >
              {prod.id} - {prod.name} - {prod.price}
            </li>,
          )
        }
      </ul>
    </div>
  );
};

export default Repeticao;
