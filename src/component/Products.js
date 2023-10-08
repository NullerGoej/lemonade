import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductCard from './ProductCard';

function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(`http://server.moedekjaer.dk:8787/products`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  if (!products) {
    return (<div className="col-md-8">
      <div>Loading...</div>
    </div>);
  }

  return (
    <div className="Products">
      <Navbar />
      <main className="pb-5 py-5">
        <section>
            <div className="container">
              <h2 className="text-center my-5">our Products</h2>
              <div className="row">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product.id} />
                ))}
              </div>
            </div>
          </section>
      </main>
      < Footer />
    </div>
  );
}

export default Products;