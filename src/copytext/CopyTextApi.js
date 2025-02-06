import React, { useState, useEffect, useCallback } from 'react';

function CopyTextApi() {
    const [data, setData] = useState([]);
    const [copiedIndex, setCopiedIndex] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const copyToClipboard = useCallback((text, index) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setCopiedIndex(index);
                setTimeout(() => setCopiedIndex(null), 1000); // Reset after 1 sec
            })
            .catch((err) => alert(err));
    }, []);

    return (
        <div>
            {data.map((da, index) => (
                <div key={da.id}>
                    <p>
                        {da.title}
                        <button onClick={() => copyToClipboard(da.title, index)}>
                            {copiedIndex === index ? 'Copied!' : 'Copy'}
                        </button>
                    </p>
                </div>
            ))}
        </div>
    );
}

export default CopyTextApi;
