import React, { useState } from 'react'

const SortingReduce = () => {
    const data = [
        {
            id: 1,
            item: "shoes",
            price: 100
        },
        {
            id: 2,
            item: "jacket",
            price: 400
        },
        {
            id: 3,
            item: "hat",
            price: 50
        },
        {
            id: 4,
            item: "sunglasses",
            price: 250
        },
        {
            id: 5,
            item: "gloves",
            price: 300
        }
    ];

    const [products, setProducts] = useState(data)
    const ascendingOrder = () => {
        setProducts([...products].sort((a, b) => a.price - b.price))
    }

    const descendingOrder = () => {
        setProducts([...products].sort((a, b) => b.price - a.price))
    }
    return (
        <>
            <div>
                <button className='btn btn-success' onClick={ascendingOrder}>Ascending</button>
                <button className='btn btn-danger' onClick={descendingOrder}>Descending</button>
            </div>
            <div>
                {products.map((product) => {
                    return (
                        <div className='d-flex'>
                            <p>{product.item}</p> -
                            <p>{product.price}</p>
                        </div>

                    )
                })}
            </div>
        </>
    )
}

export default SortingReduce
