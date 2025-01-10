import React, { useEffect, useState } from 'react'

const UseeffectFetching = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((responce) => responce.json())
            .then((jsonData) => setData(jsonData))
    }, [])  // The effect runs only once, when the component is mounted

    return (
        <div>
            Data:{JSON.stringify(data)}
        </div>
    )
}

export default UseeffectFetching
