import style from './ProfilePage.module.css';

import { collection, query, where, getDocs} from "firebase/firestore";
import { db } from '../../firebaseConfig';

import { CompanyContext } from '../../context/CompanyContext';
import { useContext, useState, useEffect } from 'react';

const ProfilePage = () => {
const { selectedUser } = useContext(CompanyContext);
const [projectList, setProjectList] = useState([]);

var projectCollectionRef = query(collection(db, "projects"), where("id", "==", `${selectedUser.id}`));
console.log(selectedUser.id);

useEffect(() => {
    const getProjectList = async () => {
        const data = await getDocs(projectCollectionRef);
        setProjectList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProjectList();
  }, []);

console.log(projectList);
return(
        
            <main className={style.mainProfilPageSection}>
                <div className={style.ProfilPageContainer}>
                    {/* <div className={style.caroselCompanyPictures}>
                        <img src="images/05-scaled.webp" alt=""/>
                    </div> */}

                    <div className={style.companyInformation}>
                        <div className={style.basicInformation}>
                            <img className={style.peopleIMG} src={selectedUser.avatarImageUrl} alt=""/>
                            <div className= {style.basicInformationTxt}>
                                <div className={style.companyName}>
                                    {selectedUser.companyName}
                                </div>
                                {/* <div className={style.ratingSection}>
                                    <span>4.0</span>
                                    <span className={style.star}></span>
                                    <span className={style.star}></span>
                                    <span className={style.star}></span>
                                    <span className={style.star}></span>
                                    <span className={style.star}></span>
                                    <span className={style.numReviews}>30 Ревюта</span>
                                </div> */}
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
                                ?   projectList.map(project => 
                                        <div className={style.projectCard} key={project.id}>
                                            <img src={project.imageUrls[0]} alt="" width="385px" height="257px"/>
                                            <h3>{project.projectName}</h3>
                                        </div>
                                    )    
                                :   <h3 className="no-articles">No articles yet</h3>
                            }
                        </div>
                    </div>
                    <div className={style.credentialSection}>
                        <h2>Credentials</h2>
                        <div className={style.credentialContainer}>
                            <div className={style.credentialCard}>
                                <img src="images/S45C-515020408290-page-001.jpg" alt="" width="385px" height="257px"/>
                            </div>
                            <div className={style.credentialCard}>
                                <img src="images/DOC003-page-001.jpg" alt="" width="385px" height="257px"/>
                            </div>
                            <div className={style.credentialCard}>
                                <img src="images/Udostoverenie-page-001.jpg" alt="" width="385px" height="257px"/>
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
                            <img className={style.contactIcons} src='images/icons/icons8-phone-24.png'/>
                            <div className={style.contactInformation}>{selectedUser.phoneNumber}</div>
                        </div>
                        <div className={style.contactInformationRow}>
                            <img className={style.contactIcons} src='images/icons/icons8-website-24.png'/>
                            <div className={style.contactInformation}>{selectedUser.url}</div>
                        </div>
                        <div className={style.contactInformationRow}>
                            <img className={style.contactIcons} src='images/icons/icons8-map-marker-24.png'/>
                            <div className={style.contactInformation}> {selectedUser.city} , {selectedUser.street}</div>
                        </div>
                        {/* <div className={style.contactInformationRow}>
                            <img className={style.contactIcons} src='images/icons/icons8-people-24.png'/>
                            <div>18 Последователи</div>
                        </div>
                        <div className={style.contactInformationRow}>
                            <Link to="#">+ Последвай ни</Link>
                        </div> */}
                    </div>
                </div>
            </main>
    );
};


export default ProfilePage;