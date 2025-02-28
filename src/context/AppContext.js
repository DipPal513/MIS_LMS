"use client";

import Cookies from "js-cookie";
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(
        Cookies.get("token")
    );
    const [isLoading, setIsLoading] = useState(
        false
    );

    return (
        <AppContext.Provider value={{ setIsLoading, isLoading, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
