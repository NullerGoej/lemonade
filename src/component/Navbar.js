import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cartCount } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';
import './Navbar.scss';
import Loading from './Loading';
function Navbar() {
    const location = useLocation();
    const [url, setUrl] = React.useState(null);
    useEffect(() => {
        setUrl(location.pathname);
        document.querySelector('#Logo').innerHTML = (window.innerWidth >= 1200 ? "Moe's Lemons" : "Moe's");
        window.addEventListener('resize', () => {
            document.querySelector('#Logo').innerHTML = (window.innerWidth >= 1200 ? "Moe's Lemons" : "Moe's");
        });
    }, [location]);

    const cart = useSelector((state) => state.cart);
    const totalItems = cartCount(cart);

    return (
        <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 fixed-top bg-dark shadow-lg" id='navbar'>
            <Loading />
            <div className="container">
                <div className="row">
                    <Link to="/" className="d-flex align-items-center col-3 mb-2 mb-0 text-white text-decoration-none link-light">
                        <img className="bi me-2" height="32" src="../lemon.svg.png" alt="Lemon"></img>
                        <span className="fs-4 lemon" id='Logo'>Moe's Lemons</span>
                    </Link>

                    <ul className="nav col-6 mb-2 justify-content-center mb-0 align-content-center">
                        <div className="d-none d-md-flex d-lg-flex">
                            <li><Link to="/" className={"nav-link px-2 link-" + (url === "/" ? "secondary" : "light")}>Home</Link></li>
                            <li><Link to="/products" className={"nav-link px-2 link-" + (url === "/products" ? "secondary" : "light")}>Products</Link></li>
                            <li><Link to="/about" className={"nav-link px-2 link-" + (url === "/about" ? "secondary" : "light")}>About</Link></li>
                        </div>
                    </ul>

                    <div className="col-3 text-end">
                        <div className="position-relative" style={{ top: "calc(50% - (25px * 0.5))" }}>
                            <button className="navbar-toggler me-3 d-inline d-md-none d-lg-none link-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa fa-bars fs-4"></i>
                            </button>
                            <Link to="/cart" className={"text-decoration-none link-" + (url === "/cart" ? "secondary" : "light")}>
                                <i className="fas fa-shopping-cart fs-4"></i>
                                <span className={"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" + (totalItems > 0 ? " opacity-100" : " opacity-0")}>
                                    <span id='cart-count'>{totalItems}</span>
                                    <span className="visually-hidden">items in cart</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className={"nav-link px-2 link-" + (url === "/" ? "secondary" : "light")}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className={"nav-link px-2 link-" + (url === "/products" ? "secondary" : "light")}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className={"nav-link px-2 link-" + (url === "/about" ? "secondary" : "light")}>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;