import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <div className="Products">
      <Navbar />
      <main className="pb-5 py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2 className="text-center mb-4">Company Story</h2>
              <p>Our lemonade stand was founded in 2023 by two best friends who wanted to share their love of fresh, homemade lemonade with the world. Since then, we've been committed to using only the highest quality ingredients and sustainable practices to create the best lemonade you've ever tasted.</p>
              <p>Our mission is simple: to spread joy and refreshment, one glass of lemonade at a time.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-8 mx-auto">
              <h2 className="text-center mb-4">Team</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4">
                    <img src="https://via.placeholder.com/300" className="card-img-top" alt="Team Member 1" />
                    <div className="card-body">
                      <h5 className="card-title">John Doe</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu bibendum bibendum, elit sapien bibendum elit, vel blandit enim eros vel velit.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4">
                    <img src="https://via.placeholder.com/300" className="card-img-top" alt="Team Member 2" />
                    <div className="card-body">
                      <h5 className="card-title">Jane Smith</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu bibendum bibendum, elit sapien bibendum elit, vel blandit enim eros vel velit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-8 mx-auto">
              <h2 className="text-center mb-4">Values</h2>
              <p>We're committed to using only the highest quality ingredients in our lemonade, sourced from local farms whenever possible. We also believe in sustainable practices, like using compostable cups and donating a portion of our profits to environmental causes.</p>
            </div>
          </div>
        </div>
      </main>
      < Footer />
    </div>
  );
}

export default About;