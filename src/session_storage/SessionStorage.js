import React, { useState, useEffect } from "react";
import Cart from "./Cart";

const SessionStorage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = sessionStorage.getItem("cartItems");
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addItemToCart = (newItem) => {
        setCartItems([...cartItems, newItem]);
    };

    const removeItemFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
    };

    return (
        <div className="App">
            <h1>Shopping Cart</h1>
            <Cart
                cartItems={cartItems}
                addItemToCart={addItemToCart}
                removeItemFromCart={removeItemFromCart}
            />
        </div>
    );
};

export default SessionStorage;
