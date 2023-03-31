import React from 'react';

interface Product {
  name: string;
}

function Client() {
  const products: Product[] = [
    {
      name: 'Car',
    },
    {
      name: 'Phone',
    },
  ];

  return (
    <div alignItems="center" display="flex" flexDirection={['column', { '#': 'row' }]} justifyContent="center">
      {products.map(product => (
        <div key={product.name} p="4">
          {product.name}
        </div>
      ))}
    </div>
  );
}

export default Client;
