/* eslint-disable react/prop-types */
import { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext(null)

export default function ThemeContextProvider({ children }) {
    const [dark, setDark] = useState(false)
    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
            {children}
        </ThemeContext.Provider>
    )
}