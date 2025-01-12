// src/components/ProductView.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../features/Nasa';

const NasaView = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.nasa);
    const { productName, productPrice, isAvailable, status, error } = product;

    const [productId, setProductId] = useState('');

    const handleFetchProduct = () => {
        if (productId) {
            dispatch(fetchProduct(productId));
        }
    };

    return (
        <div>
            <h1>Fake Store Product Viewer</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter Product ID"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                />
                <button onClick={handleFetchProduct}>Fetch Product</button>
            </div>

            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}

            {status === 'succeeded' && (
                <div>
                    <h2>Product Details</h2>
                    <p><strong>Name:</strong> {productName}</p>
                    <p><strong>Price:</strong> {productPrice}</p>
                    <p><strong>Available:</strong> {isAvailable ? 'Yes' : 'No'}</p>
                </div>
            )}
        </div>
    );
};

export default NasaView;
