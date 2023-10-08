import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
    const productID = props.product;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://moedekjaer.dk:8787/product/${productID}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error(error));
    }, [productID]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <img src="https://via.placeholder.com/600x400" alt="Lemonade" className="card-img-top" />
                <div className="card-body">
                    <span className="float-end price">${product.price}</span><h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <Link to={"/product/"+product.id} className="btn btn-primary">View Product</Link>
                    <Link to="/add-to-cart" className="btn float-end btn-success">Add</Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;