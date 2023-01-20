import style from './ProjectCard.module.css';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { ProjectContext } from '../../context/ProjectContext';


export const ProjectCard = ({project}) =>{
    const { setSelectedProject } = useContext(ProjectContext);
    const navigate = useNavigate();
    
    const clickHandler = (e) =>{
        e.preventDefault();
        setSelectedProject(project);
        navigate(`/projects/${project.id}`)
    };

    return(
        <div className={style["card"]} onClick= {clickHandler}>
            <img
                className={style["img"]}
                src={project.imageUrls[0]}
                alt={project.projectName}
                width="280px"
                height="150px"
            />
            <div className={style["company-name"]}>{project.company}</div>
            <p className={style["project-name"]}>
                {project.projectName}
            </p>
        </div>
    );
};