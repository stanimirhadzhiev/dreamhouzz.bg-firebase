import { createContext, useState} from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const CompanyContext = createContext();


export const CompanyProvider = ({children}) => {
    const [ selectedUser, setSelectedUser ] = useLocalStorage('selectedUser', {});
    

    return(
        <CompanyContext.Provider value={{selectedUser, setSelectedUser }}>
            {children}
        </CompanyContext.Provider>
    );
}