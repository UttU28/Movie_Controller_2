// context/AppStateContext.js
"use client";

import React, { createContext, useContext, useState } from 'react';

const AppStateContext = createContext();

export function AppStateProvider({ children }) {
    const [visibleContentID, setVisibleContentID] = useState(null); // Track currently visible app

    const showApp = (contentID) => setVisibleContentID(contentID);
    const goBack = () => setVisibleContentID(null); // Reset to show main content

    return (
        <AppStateContext.Provider value={{ visibleContentID, showApp, goBack }}>
            {children}
        </AppStateContext.Provider>
    );
}

export const useAppState = () => useContext(AppStateContext);
