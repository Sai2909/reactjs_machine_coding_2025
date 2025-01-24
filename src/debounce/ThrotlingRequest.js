import React, { useEffect, useState } from "react";

export default function Throttling() {
    const [scrollPosition, setScrollPosition] = useState(0);

    // Function to handle scroll event
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
        console.log("Scroll position:", window.scrollY);
    };

    // Throttle function
    function throttle(fn, limit = 2000) {
        let lastCall = 0;

        return function (...args) {
            const now = Date.now();
            if (now - lastCall >= limit) {
                lastCall = now;
                fn(...args);
            }
        };
    }

    useEffect(() => {
        const throttledScroll = throttle(handleScroll, 2000);
        window.addEventListener("scroll", throttledScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener("scroll", throttledScroll);
        };
    }, []);

    return (
        <div className="App" style={{ height: "2000px" }}>
            <h1>Throttled Scroll Event</h1>
            <p>Scroll down to see the throttled scroll position update in the console.</p>
            <div style={{ position: "fixed", top: "10px", right: "10px" }}>
                <strong>Scroll Position:</strong> {scrollPosition}px
            </div>
        </div>
    );
}
