import React, { useEffect, useState } from 'react'
import UserData from './UserData';


const FetchingData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then((responce) => responce.json())
            .then((comming) => {
                setData(comming)
                setLoading(false);
            }).catch(() => setLoading(false))
    }, [])
    return (
        <UserData data={data} loading={loading} />
    )
}

export default FetchingData
