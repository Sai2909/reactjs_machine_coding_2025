import React, { useState } from 'react'

const CheckboxField = () => {
    const [available, setAvailable] = useState(false);
    const handleChange = (e) => {
        setAvailable(e.target.checked)
    }
    return (
        <div>
            <input type="checkbox" checked={available} onChange={handleChange} />
            <p>Product {available ? 'available' : 'not available'} this.</p>
        </div>
    )
}

export default CheckboxField
