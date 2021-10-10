import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function useData() {
    return useContext(DataContext);
}

function DataProvider({ children }) {
    // state


    const value = {

    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;
