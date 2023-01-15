import { useEffect, useContext } from 'react';
import { ProjectContext } from '../../context/ProjectContext';

import { ProjectCard } from '../ProjectCard/ProjectCard';
import * as projectService from '../../services/projectService';
import style from './ProjectGallery.module.css';

export const ProjectGallery = () =>{
    const {projectList, setProjectList} = useContext(ProjectContext);
    

    useEffect(() => {
        projectService.getAllProjects(setProjectList);
    },[]);

    return(
        <section className={style.allProjects}>
            <h2 className={style.galleryTitle}>All Projects</h2>
            <div className={style.galery}>
                {projectList.length > 0
                    ? projectList.map(project => <ProjectCard key={project.id} project={project} />)
                    : <h3>No projects yet</h3>
                }
            </div>
        </section>
    );
}