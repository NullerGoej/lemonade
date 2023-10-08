import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartProduct from './CartProduct';
import { useSelector } from 'react-redux';


function Cart() {
  const [products, setProducts] = useState(null);

  const cart = useSelector((state) => state.cart);
  const items = Object.keys(cart);

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


  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    totalPrice+= products[items[i]-1].price * cart[items[i]];
  }

  return (
    <div className="Products">
      <Navbar />
      <main className="pb-5 py-5 my-5">
        <div className="container">
          <h1 className="mb-4">Cart Summary</h1>
          <div className="row">
            <div className="col-md-8">
              {items.length === 0 && <div className="alert alert-info">Your cart is empty</div>}
              {items.map((item) => (
                <CartProduct key={item} product={item} />
              ))}
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Subtotal</h4>
                  <p className="card-text">Total price: ${totalPrice.toFixed(2)}</p>
                  <button className="btn btn-primary btn-block">Proceed to Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Cart;