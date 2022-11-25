import style from './ProfilePage.module.css';

const ProfilePage = () => {


return(
        <>
            <div className={style.contactContainer}>
                <div className={style.messageContainer}>
                    <div className={style.messageContainerTxt}>
                        Свържете се с SVH Build Ltd.
                    </div>
                    <button className={style.sendMessageBTN}>Изпрати съобщение</button>
                </div>
                <div className={style.contactInformationContainer}>
                    <div className={style.contactInformationRow}>
                        <div className={style.phoneIMG}></div>
                        <a href="tel:0892319876">+359 892319876</a>
                    </div>
                    <div className={style.contactInformationRow}>
                        <div className={style.websiteIMG}></div>
                        <a href="http://geopartner.bg/">Website</a>
                    </div>
                    <div className={style.contactInformationRow}>
                        <div className={style.addresIMG}></div>
                        <div>gr. Burgas , Slaveikov 205</div>
                    </div>
                    <div className={style.contactInformationRow}>
                        <div class={style.followersIMG}></div>
                        <div>18 Последователи</div>
                    </div>
                    <div className={style.contactInformationRow}>
                        <a href="#">+ Последвай ни</a>
                    </div>
                </div>
            </div>

            <main className={style.mainProfilPageSection}>
                <div className={style.ProfilPageContainer}>
                    <div className={style.caroselCompanyPictures}>
                        <img src="images/05-scaled.webp" alt=""/>
                    </div>

                    <div className={style.companyInformation}>
                        <div className={style.basicInformation}>
                            <img className={style.peopleIMG} src="images/people.jpg" alt=""/>
                            <div className= {style.basicInformationTxt}>
                                <div className={style.companyName}>
                                    SVH Build Ltd.
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ex obcaecati atque odio nam, exercitationem ullam molestias libero cumque cum facilis. Officiis dolore, illo at consequatur porro ad odio quo!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ex obcaecati atque odio nam, exercitationem ullam molestias libero cumque cum facilis. Officiis dolore, illo at consequatur porro ad odio quo!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ex obcaecati atque odio nam, exercitationem ullam molestias libero cumque cum facilis. Officiis dolore, illo at consequatur porro ad odio quo!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ex obcaecati atque odio nam, exercitationem ullam molestias libero cumque cum facilis. Officiis dolore, illo at consequatur porro ad odio quo!

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ex obcaecati atque odio nam, exercitationem ullam molestias libero cumque cum facilis. Officiis dolore, illo at consequatur porro ad odio quo!

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ex obcaecati atque odio nam, exercitationem ullam molestias libero cumque cum facilis. Officiis dolore, illo at consequatur porro ad odio quo!
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