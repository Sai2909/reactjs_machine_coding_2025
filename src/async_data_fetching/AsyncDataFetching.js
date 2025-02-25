import React, { useEffect, useState } from 'react'

const AsyncDataFetching = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const result = await response.json()
                //after 2 seconds
                setTimeout(() => {
                    setLoading(false)
                    setData(result)
                }, 2000)

            } catch (error) {
                console.error("ERROR:", error)
                setLoading(false)
            }
        }
        fetchData();
    }, [])




    return (
        <div>
            <h2>Data listing</h2>
            {loading ? (<p>Loading</p>) :
                (<ul>
                    {data.map((da, i) => (
                        <li key={i}>{da.name}</li>
                    ))}
                </ul>)}
        </div>
    )
}

export default AsyncDataFetching
