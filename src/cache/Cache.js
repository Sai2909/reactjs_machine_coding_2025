import React, { useEffect, useState } from 'react'
const cache = {}
console.log(cache, "123")
const Cache = () => {
    const [data, setData] = useState(cache.users || []);
    const [loading, setLoading] = useState(!cache.users);
    const [error, setError] = useState(null)


    const fetchData = async () => {
        if (cache.users) {
            console.log("Using cached data, no API call needed.");
            return;// Use cached data if availabl
        }
        console.log("Fetching data from API...");
        console.log("Using cached data, no API call needed.");
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) throw new Error('Failed Fetching..')
            const json = await response.json();
            cache.users = json //stored data in cache
            setData(json)
            console.log("API Call Success, Data Fetched:", json);

        } catch (error) {
            setError(error.message)
            console.log("API Call Failed:", error.message);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        console.log("Component Mounted / Re-rendered. Checking for API calls...");
        fetchData();
    }, [])
    return (
        <div>
            <h2>Uuser_List</h2>
            {loading && <p>Loading...</p>}
            {error && (
                <div>

                    <p> Error:{error}</p>
                    <button onClick={fetchData}>Fetch Data</button>

                </div>
            )}
            {!loading && !error && (
                <ul>
                    {
                        data.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))
                    }
                </ul>

            )}

        </div>
    )
}

export default Cache
