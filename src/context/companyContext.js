import { createContext, useState} from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const CompanyContext = createContext();


export const CompanyProvider = ({children}) => {
    const [ selectedUser, setSelectedUser ] = useLocalStorage('selectedUser', {});
    const [ projectId, setProjectId ] = useState({});

    return(
        <CompanyContext.Provider value={{selectedUser, setSelectedUser, projectId, setProjectId}}>
            {children}
        </CompanyContext.Provider>
    );
}