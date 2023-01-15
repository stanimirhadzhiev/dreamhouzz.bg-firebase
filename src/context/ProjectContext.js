import { createContext, useState} from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const ProjectContext = createContext();

export const ProjectProvider = ({children}) => {
    const [ projectList, setProjectList ] = useState([]);
    const [ selectedProject, setSelectedProject ] = useLocalStorage('selectedProject', {});
    const [ projectId, setProjectId ] = useState({});

    return(
        <ProjectContext.Provider value={{ projectList, setProjectList, selectedProject, setSelectedProject, projectId, setProjectId }}>
            {children}
        </ProjectContext.Provider>
    );
}