import React from 'react';
import Navbar from './component/Navbar';
import ProductCard from './component/ProductCard';
import Footer from './component/Footer';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="pb-5">
        <header className="hero-image vignette">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1>Refreshing Lemonades</h1>
                <p>Quench your thirst with our delicious lemonades made from fresh lemons.</p>
                <Link to="/products" className="btn btn-primary btn-lg">Shop Now</Link>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img src="barista.svg" alt="Lemonade" className="img-fluid" />
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="container">
            <h2 className="text-center my-5">Featured Products</h2>
            <div className="row">
              <ProductCard product="1" />
              <ProductCard product="2" />
              <ProductCard product="3" />
            </div>
          </div>
        </section>
      </main>
      < Footer />
    </div>
  );
}

export default App;