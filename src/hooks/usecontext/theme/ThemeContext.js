import React, { createContext, useState } from 'react'
import Theme1 from './Theme1';

export const ThemeCon = createContext();
const ThemeContext = () => {

    const [theme, setTheme] = useState('light');

    return (
        <ThemeCon.Provider value={{ theme, setTheme }}>
            <div className={theme}>
                <h1>{`Current theme: ${theme}`}</h1>
                <Theme1 />
            </div>
        </ThemeCon.Provider>
    )
}

export default ThemeContext
