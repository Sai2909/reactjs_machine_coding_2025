import React, { useState } from "react";

function Deposite() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    const addItem = () => {
        setItems([...items, newItem]);
        setNewItem("");
    };

    return (
        <div>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={addItem} disabled={!newItem.trim()}>Add Item</button>
            <ItemList items={items} addItem={addItem} />
        </div>
    );
}

function ItemList({ items }) {

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default Deposite; 
