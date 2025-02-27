import React, { useMemo, useState } from 'react'
const data = [
    { id: 1, name: 'Apple', price: 10 },
    { id: 2, name: 'Banana', price: 5 },
    { id: 3, name: 'Orange', price: 8 },
];
const Sai = () => {
    const [products] = useState(data)
    const [searchTerm, setSearchTerm] = useState("")

    const filterdProducts = useMemo(() => {
        return products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }, [products, searchTerm])



    return (
        <div>
            <div>
                <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div>
                {filterdProducts.map((fil) => (
                    <li key={fil.id}>{fil.name}</li>
                ))}
            </div>
        </div>

    )
}

export default Sai
