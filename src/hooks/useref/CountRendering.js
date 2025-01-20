import { useRef, useEffect } from 'react';
function useRenderCount() {
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current += 1;
    });
    return renderCount.current;
}// Usage


function RenderCounter() {
    const count = useRenderCount();
    return <div>Component has rendered {count} times</div>;
} export default RenderCounter;