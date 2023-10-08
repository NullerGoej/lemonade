import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="Products">
            <Navbar />
            <main className="hero vignette">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center">
                            <h1 className="display-4">404</h1>
                            <p className="lead">Sorry, the page you are looking for could not be found.</p>
                            <Link to="/" className="btn btn-primary">Go back to homepage</Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default NotFound;