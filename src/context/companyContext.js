import { createContext, useState} from "react";

export const CompanyContext = createContext();


export const CompanyProvider = ({children}) => {
    const [ selectedUser, setSelectedUser ] = useState({});

    return(
        <CompanyContext.Provider value={{selectedUser, setSelectedUser}}>
            {children}
        </CompanyContext.Provider>
    );
}