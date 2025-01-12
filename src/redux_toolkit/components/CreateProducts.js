// src/components/ProductView.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct, setAvailability } from '../features/ProoductsSlice';  // Import the actions

const Products = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.productss);  // Access the product state

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [isAvailable, setIsAvailable] = useState(false);

    const handleSetProduct = () => {
        dispatch(setProduct({ productName, productPrice, isAvailable }));
    };

    const handleAvailabilityToggle = () => {
        dispatch(setAvailability(!product.isAvailable));
    };

    return (
        <div>
            <h1>Product Information</h1>

            <div>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Product Price"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                />
                <label>
                    Available:
                    <input
                        type="checkbox"
                        checked={isAvailable}
                        onChange={(e) => setIsAvailable(e.target.checked)}
                    />
                </label>
                <button onClick={handleSetProduct}>Set Product</button>
            </div>

            <div>
                <h2>Current Product Info</h2>
                <p>Name: {product.productName}</p>
                <p>Price: {product.productPrice}</p>
                <p>Available: {product.isAvailable ? 'Yes' : 'No'}</p>

                <button onClick={handleAvailabilityToggle}>
                    Toggle Availability
                </button>
            </div>
        </div>
    );
};

export default Products;
