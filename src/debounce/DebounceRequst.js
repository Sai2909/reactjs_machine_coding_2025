import React, { useState } from "react";

export default function DebounceRequest() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    // Function to fetch data from JSONPlaceholder API
    const sendApiRequest = async (query) => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        console.log(`Sending API request for query: ${query}`);
        setLoading(true);

        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?q=${query}`
            );
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    // Debounce function
    function debounce(fn, delay = 1000) {
        let timer;
        return function (...args) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    }

    const debouncedApiRequest = debounce(sendApiRequest);

    return (
        <div className="App">
            <h1>Debounced API Calls (JSONPlaceholder)</h1>
            <input
                placeholder="Search posts..."
                onChange={(e) => debouncedApiRequest(e.target.value)}
            />
            {loading && <p>Loading...</p>}
            <ul>
                {results.map((result) => (
                    <li key={result.id}>
                        <strong>{result.title}</strong>
                        <p>{result.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
