import { useState } from "react";

const useDarkMode = () => {
    const [isdarMode, setisdarkMode] = useState(
        localStorage.getItem('isdarkMode') === true
    )



    const togleDarkMode = () => {
        setisdarkMode((prevState) => {
            const newMode = !prevState;
            localStorage.setItem("isdarkMode", newMode.toString()); // Store as string
            return newMode;
        });
    };
    return { isdarMode, togleDarkMode }
}

export default useDarkMode;