import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createProduct, deleteProduct } from '../features/CrudProductSlice'; // Import actions

const CrudProduct = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products); // Access the product list

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [isAvailable, setIsAvailable] = useState(false);

    const handleCreateProduct = () => {
        const id = Date.now(); // Simple unique ID
        dispatch(createProduct({ id, productName, productPrice, isAvailable }));
        setProductName('');
        setProductPrice('');
        setIsAvailable(false);
    };



    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id));
    };

    return (
        <div>
            <h1>Product Management</h1>

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
                <button onClick={handleCreateProduct}>Add Product</button>
            </div>

            <div>
                <h2>Product List</h2>
                {products.map((product) => (
                    <div key={product.id}>
                        <p>Name: {product.productName}</p>
                        <p>Price: {product.productPrice}</p>
                        <p>Available: {product.isAvailable ? 'Yes' : 'No'}</p>
                        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CrudProduct;
