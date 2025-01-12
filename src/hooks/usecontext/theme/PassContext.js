import React, { useContext } from 'react'
import { ThemeCon } from './ThemeContext'

const PassContext = () => {
    const { theme, setTheme } = useContext(ThemeCon)
    const toggleTheme = () => {
        setTheme(prevThem => (prevThem === "light" ? "dark" : "light"))
    }
    return (
        <div>
            <h1>Passing</h1>
            <h2>{`The theme is currently: ${theme}`}</h2>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    )
}

export default PassContext
