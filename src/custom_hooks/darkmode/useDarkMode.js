import { useState } from "react";

const useDarkMode = () => {
    const [isdarMode, setisdarkMode] = useState(
        localStorage.getItem('isdarkMode') === true
    )


    const togleDarkMode = () => {
        setisdarkMode((prevState) => {
            localStorage.setItem('isdarkMode', !prevState);
            return !prevState
        })
    }

    return { isdarMode, togleDarkMode }
}

export default useDarkMode;