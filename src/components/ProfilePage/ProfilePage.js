import style from './ProfilePage.module.css';
import { Link } from 'react-router-dom';

import { CompanyContext } from '../../context/companyContext';
import { useContext } from 'react';

const ProfilePage = () => {
const { selectedUser } = useContext(CompanyContext);
console.log(selectedUser);
return(
        <>
            <div className={style.contactContainer}>
                <div className={style.messageContainer}>
                    <div className={style.messageContainerTxt}>
                        Свържете се с {selectedUser.companyName}
                    </div>
                    <button className={style.sendMessageBTN}>Изпрати съобщение</button>
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
                        <div className={style.contactInformation}>гр. {selectedUser.city} , {selectedUser.street}</div>
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

            <main className={style.mainProfilPageSection}>
                <div className={style.ProfilPageContainer}>
                    <div className={style.caroselCompanyPictures}>
                        <img src="images/05-scaled.webp" alt=""/>
                    </div>

                    <div className={style.companyInformation}>
                        <div className={style.basicInformation}>
                            <img className={style.peopleIMG} src={selectedUser.avatarImageUrl} alt=""/>
                            <div className= {style.basicInformationTxt}>
                                <div className={style.companyName}>
                                    {selectedUser.companyName}
                                </div>
                                <div className={style.ratingSection}>
                                    <span>4.0</span>
                                    <span className={style.star}></span>
                                    <span className={style.star}></span>
                                    <span className={style.star}></span>
                                    <span className={style.star}></span>
                                    <span className={style.star}></span>
                                    <span className={style.numReviews}>30 Ревюта</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.companyNavigation}>
                        <nav>
                            <a href="#">За фирмата</a>
                            <span>|</span>
                            <a href="#">Проекти</a>
                            <span>|</span>
                            <a href="#">Сертификати</a>
                            <span>|</span>
                            <a href="#">Ревюта</a>
                        </nav>
                    </div>
                    <p className={style.detailedInformation}>
                        {selectedUser.companyInformation}
                    </p>
                    <div className={style.projectsSection}>
                        <h2>00 Проекти</h2>
                        <div className={style.projectsContainer}>

                            <div className={style.projectCard}>
                                <img src="images/landscape.jpg" alt="" width="385px" height="257px"/>
                                <h3>Име на проекта динамично генерирано</h3>
                                <span>00 Снимки</span>
                            </div>

                        </div>
                    </div>
                    <div className={style.credentialSection}>
                        <h2>Сертификати и референции</h2>
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
            </main>
        </>
    );
};


export default ProfilePage;