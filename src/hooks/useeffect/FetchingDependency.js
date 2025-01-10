import React, { useState } from 'react';
import DataFetcher from './UseEffectDependency';


const FetchingDependency = () => {
    const [postId, setPostId] = useState(1);

    return (
        <div>
            <h1>JSONPlaceholder API Example</h1>
            <button onClick={() => setPostId((prev) => prev + 1)}>Next Post</button>
            <DataFetcher id={postId} />
        </div>
    );
};

export default FetchingDependency;
