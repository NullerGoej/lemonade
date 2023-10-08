import React from 'react';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="hero-image vignette">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>Refreshing Lemonades</h1>
              <p>Quench your thirst with our delicious lemonades made from fresh lemons.</p>
              <a href="/products" className="btn btn-primary btn-lg">Shop Now</a>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img src="barista.svg" alt="Lemonade" className="img-fluid" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <h2 className="text-center my-5">Featured Products</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/600x400" alt="Lemonade" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Classic Lemonade</h5>
                  <p className="card-text">Our classic lemonade made with fresh lemons and sugar.</p>
                  <a href="/products" className="btn btn-primary">View Product</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/600x400" alt="Strawberry Lemonade" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Strawberry Lemonade</h5>
                  <p className="card-text">Our classic lemonade with a twist of fresh strawberries.</p>
                  <a href="/products" className="btn btn-primary">View Product</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/600x400" alt="Mint Lemonade" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Mint Lemonade</h5>
                  <p className="card-text">Our classic lemonade with a refreshing hint of mint.</p>
                  <a href="/products" className="btn btn-primary">View Product</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;