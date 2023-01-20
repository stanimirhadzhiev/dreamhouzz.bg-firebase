import style from './ProjectGallery.module.css';

import * as projectService from '../../services/projectService';
import { useEffect, useContext } from 'react';

import { ProjectContext } from '../../context/ProjectContext';

import { ProjectCard } from '../ProjectCard/ProjectCard';

export const ProjectGallery = () =>{
    const {projectList, setProjectList} = useContext(ProjectContext);
    

    useEffect(() => {
        projectService.getAllProjects(setProjectList);
    },[]);

    return(
        <div className={style["galery"]}>
            {projectList.length > 0
                ? projectList.map(project => <ProjectCard key={project.id} project={project} />)
                : <h3>No projects yet</h3>
            }
        </div>
    );
}