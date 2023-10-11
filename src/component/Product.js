import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Product.scss';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';

function Product() {
    const productID = useParams().id;
    
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`http://server.moedekjaer.dk:8787/product/${productID}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error(error));
    }, [productID]);

    if (!product) {
        return ((<div className="col-md-8">
            <div>Loading...</div>
        </div>));
    }

    return (
        <div className="Product">
            <Navbar />
            <main className="ppb-5 py-5 my-5">
                <div className="container">
                    <div className="card mb-3">
                        <img src={product.image} className="card-img-top" alt={product.name} />
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text"><small className="text-muted">${product.price}</small></p>
                            <button type="button" onClick={() => dispatch(addItemToCart(product.id))} className="btn btn-success btn-block">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </main>
            < Footer />
        </div>
    );
}

export default Product;