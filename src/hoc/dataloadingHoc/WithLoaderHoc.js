import React, { useState, useEffect } from 'react';

const WithLoaderHoc = (WrappedComponent) => {
    const LoaderComponent = (props) => {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 2000);

            return () => clearTimeout(timer); 
        }, []);

        return (
            <div>
                {loading ? <p>Loading...</p> : <WrappedComponent {...props} />}
            </div>
        );
    };

    return LoaderComponent;  
};

export default WithLoaderHoc;
