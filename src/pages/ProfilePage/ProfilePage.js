import style from './ProfilePage.module.css';


import { CompanyContext } from '../../context/CompanyContext';
import { ProjectContext } from '../../context/ProjectContext';
import * as projectService from '../../services/projectService';
import { useContext, useEffect } from 'react';

import { ProjectCard } from '../../components/ProjectCard/ProjectCard';

const ProfilePage = () => {
const { selectedUser } = useContext(CompanyContext);
const {projectList, setProjectList} = useContext(ProjectContext);




useEffect(() => {
    projectService.getAllAuthorProjects(setProjectList, selectedUser);
  }, []);


return(
        
            <main className={style.mainProfilPageSection}>
                <div className={style.ProfilPageContainer}>
                    <div className={style.companyInformation}>
                        <div className={style.basicInformation}>
                            <img className={style.peopleIMG} src={selectedUser.avatarImageUrl} alt=""/>
                            <div className= {style.basicInformationTxt}>
                                <div className={style.companyName}>
                                    {selectedUser.companyName}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.companyNavigation}>
                        <nav>
                            <a href="#">About Us</a>
                            <span>|</span>
                            <a href="#">Projects</a>
                            <span>|</span>
                            <a href="#">Credentials</a>
                            <span>|</span>
                            <a href="#">Reviews</a>
                        </nav>
                    </div>
                    <p className={style.detailedInformation}>
                        {selectedUser.companyInformation}
                    </p>
                    <div className={style.projectsSection}>
                        <h2>{projectList.length} Projects</h2>
                        <div className={style.projectsContainer}>
                            {projectList.length > 0
                                ? projectList.map(project => <ProjectCard key={project.id} project={project} />)
                                : <h3>No projects yet</h3>
                            }
                        </div>
                    </div>
                    <div className={style.credentialSection}>
                        <h2>Credentials</h2>
                        <div className={style.credentialContainer}>
                            <div className={style.credentialCard}>
                                <img src={require("../../assets/images/S45C-515020408290-page-001.jpg")} alt="" width="385px" height="257px"/>
                            </div>
                            <div className={style.credentialCard}>
                                <img src={require("../../assets/images/DOC003-page-001.jpg")} alt="" width="385px" height="257px"/>
                            </div>
                            <div className={style.credentialCard}>
                                <img src={require("../../assets/images/Udostoverenie-page-001.jpg")} alt="" width="385px" height="257px"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.contactContainer}>
                    <div className={style.messageContainer}>
                        <div className={style.messageContainerTxt}>
                            Contact with {selectedUser.companyName}
                        </div>
                        <button className={style.sendMessageBTN}>Send message</button>
                    </div>
                    <div className={style.contactInformationContainer}>
                        <div className={style.contactInformationRow}>
                            <img className={style.contactIcons} src={require('../../assets/images/icons/icons8-phone-24.png')}/>
                            <div className={style.contactInformation}>{selectedUser.phoneNumber}</div>
                        </div>
                        <div className={style.contactInformationRow}>
                            <img className={style.contactIcons} src={require('../../assets/images/icons/icons8-website-24.png')}/>
                            <div className={style.contactInformation} >{selectedUser.url}</div>
                        </div>
                        <div className={style.contactInformationRow}>
                            <img className={style.contactIcons} src={require('../../assets/images/icons/icons8-map-marker-24.png')}/>
                            <div className={style.contactInformation}> {selectedUser.city} , {selectedUser.street}</div>
                        </div>
                    </div>
                </div>
            </main>
    );
};


export default ProfilePage;