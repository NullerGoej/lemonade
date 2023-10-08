import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//import './CartProduct.scss';
import { addItemToCart,decrementQuantity } from '../features/cart/cartSlice';

function CartProduct(props) {
        const productID = props.product;
        const [product, setProduct] = useState(null);
        const dispatch = useDispatch();

        const productCount = useSelector((state) => state.cart[productID]);

        useEffect(() => {
                fetch(`http://server.moedekjaer.dk:8787/product/${productID}`)
                        .then(response => response.json())
                        .then(data => setProduct(data))
                        .catch(error => console.error(error));
        }, [productID]);

        if (!product) {
                return (<div className="col-md-8">
                        <div>Loading...</div>
                        </div>);
        }

        product.count = productCount;

        return (
            <div key={product.id} className="row mb-4">
                <div className="col-md-3">
                  <img src={product.image} alt={product.name} className="img-fluid" />
                </div>
                <div className="col-md-9">
                  <h4>{product.name}</h4>
                  <p>Price: ${product.price}</p>
                  <div className="form-inline">
                    <label htmlFor={`quantity-`+product.count} className="mr-2">Quantity: {product.count}</label>
                    <input type="number" id={`quantity-`+product.count} className="form-control mr-2" value={product.count} />
                    <button onClick={() => dispatch(decrementQuantity(product.id))} className="btn btn-danger">Remove</button>
                  </div>
                </div>
              </div>
        )
}

export default CartProduct;