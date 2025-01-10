import React, { createContext } from "react";

const Context = createContext();

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = React.useState(Boolean(localStorage.getItem("theme")) || false);

    return (
        <Context.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </Context.Provider>
    );
};

export default Context;