import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cartCount } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';
import './Navbar.scss';
function Navbar() {
    const location = useLocation();
    const [url, setUrl] = React.useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
    
    const cart = useSelector((state) => state.cart);
    const totalItems = cartCount(cart);

    return (
        <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 fixed-top bg-dark shadow-lg">
            <div className="container">
                <div className="row">
                    <Link to="/" className="d-flex align-items-center col-3 mb-2 mb-md-0 text-white text-decoration-none link-light">
                        <img className="bi me-2" height="32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/526-lemon.svg/1200px-526-lemon.svg.png" alt="Lemon"></img>
                        <span className="fs-4 lemon">Moe's Lemons</span>
                    </Link>

                    <ul className="nav col-6 mb-2 justify-content-center mb-md-0 align-content-center">
                        <li><Link to="/" className={"nav-link px-2 link-"+(url === "/" ?"secondary" : "light")}>Home</Link></li>
                        <li><Link to="/products" className={"nav-link px-2 link-"+(url === "/products" ?"secondary" : "light")}>Products</Link></li>
                        <li><Link to="/about" className={"nav-link px-2 link-"+(url === "/about" ?"secondary" : "light")}>About</Link></li>
                    </ul>

                    <div className="col-3 text-end">
                        <div className="position-relative" style={{marginTop: "8px"}}>
                            <Link to="/cart" className={"text-decoration-none link-"+(url === "/cart" ?"secondary" : "light")}>
                                <i className="fas fa-shopping-cart fs-4"></i>
                                    <span className={"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"+(totalItems > 0 ? " opacity-100" : " opacity-0")}>
                                        <span id='cart-count'>{totalItems}</span>
                                        <span className="visually-hidden">items in cart</span>
                                    </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;