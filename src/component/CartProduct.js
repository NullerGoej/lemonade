import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//import './CartProduct.scss';
import { addItemToCart, decrementQuantity } from '../features/cart/cartSlice';

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
            <div className="col-md-auto">
                <img src={product.image} alt={product.name} className="img-fluid" style={{ objectFit: 'cover', width: '5rem', height: '5rem' }} />
            </div>
            <div className="col-md">
                <span className="float-end">Price: ${(product.price * product.count).toFixed(2)}</span><h4>{product.name}</h4>
                
                <div className="form-inline row">
                    <div className='col-auto pe-0'><button onClick={() => dispatch(addItemToCart(product.id))} className="btn btn-success" style={{height: '100%'}}>+</button></div>
                    <div className='col-auto p-0'><input type="number" id={`quantity-` + product.count} className="form-control" value={product.count} readOnly style={{ width: '4rem', padding: '0.5rem 0.5rem', }} /></div>
                    <div className='col-auto p-0'><button onClick={() => dispatch(decrementQuantity(product.id))} className="btn btn-danger" style={{height: '100%'}}>-</button></div>
                    
                </div>
            </div>
            <hr className='mt-4'/>
        </div>
    )
}

export default CartProduct;