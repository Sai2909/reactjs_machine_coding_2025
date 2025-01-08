import React, { useState } from 'react'

const ClassesUsestate = () => {
    const [isDark, setIsDark] = useState(true);

    const toggleClick = () => {
        setIsDark(!isDark)
    }

    return (
        <div className={`${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}>
            <p>Current theme is {isDark ? "Dark" : "Light"}</p>
            <button onClick={toggleClick} className={`btn${isDark ? "btn-light" : "btn-dark"}`}>ToggleTheame</button>
        </div>
    )
}

export default ClassesUsestate
