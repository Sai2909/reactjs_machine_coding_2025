import React, { useEffect, useState } from 'react';

const DataFetcher = ({ id }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                return response.json();
            })
            .then((jsonData) => {
                setData(jsonData);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]); // The effect re-runs when 'id' changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h3>Post ID: {data.id}</h3>
            <h4>Title: {data.title}</h4>
            <p>{data.body}</p>
        </div>
    );
};

export default DataFetcher;
