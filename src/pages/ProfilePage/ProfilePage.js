import style from './ProfilePage.module.css';

import * as projectService from '../../services/projectService';
import { useContext, useEffect } from 'react';

import { CompanyContext } from '../../context/CompanyContext';
import { ProjectContext } from '../../context/ProjectContext';

import { ProjectGallery } from '../../components/ProjectGallery/ProjectGallery';
import { ProfilePageHeader } from "../../components/ProfilePageHeader/ProfilePageHeader";
import { Contacts } from '../../components/Contacts/Contacts';
import { Credentials } from '../../components/Credentials/Credentials';

const ProfilePage = () => {
const { selectedUser } = useContext(CompanyContext);
const {projectList, setProjectList} = useContext(ProjectContext);




useEffect(() => {
    projectService.getAllAuthorProjects(setProjectList, selectedUser);
  }, []);


return(
        
            <main className={style["main"]}>
                <div className={style["container"]}>
                    <ProfilePageHeader selectedUser={selectedUser}/>
                    <p className={style["summary"]}>
                        {selectedUser.companyInformation}
                    </p>
                    <div className={style["gallery-wrapper"]}>
                        <h2>{projectList.length} Projects</h2>
                        <div className={style["gallery"]}>
                            <ProjectGallery/>
                        </div>
                    </div>
                    <div className={style["credential-wrapper"]}>
                        <h2> Credentials </h2>
                        <Credentials/>
                    </div>
                </div>
                <Contacts selectedUser = {selectedUser}/>
            </main>
    );
};


export default ProfilePage;