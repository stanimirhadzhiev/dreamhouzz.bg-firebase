import style from './Home.module.css'

const Home = () => {

    return (
        <main className={style.mainSection}>
            <div className={style.aboutUsAndRegistration}>
                <div className={style.aboutusContainer}>
                    <div className={style.aboutusInfo}>
                        <h1> The Best Place to Find Professionals.</h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                        repellendus at voluptatibus dolores distinctio officiis
                        consequuntur eligendi eaque obcaecati temporibus quis, molestiae
                        repudiandae, minus molestias mollitia dolorum eveniet adipisci
                        fugit?
                        </p>
                    </div>
                </div>
                <div className={style.registrationContainer}>
                    <h3 className={style.registrationProgramName}>
                        <img src="images/icons/icons8-company-16.png" alt="" />
                        DreamHouZz Pro
                    </h3>
                    <h2>Join Millions of Home Professionals</h2>
                    <p>
                        Get the all-in-one tool for marketing, CRM and project management
                    </p>
                </div>
            </div>
            {/* <section className={style.caroselSection}>
                <div className={style.mostPopularCaroselContainer}>
                    <h2>
                        Last projects
                    </h2>
                    <div className={style.CaroselContainer}>
                        <div className={style.CaroselCard}>
                            <img
                                className={style.CaroselCardImg}
                                src="images/architecture.jpg"
                                alt=""
                                width="280px"
                                height="150px"
                            />
                            <div className={style.CompanyName}>SVH Design Ltd</div>
                            <p className={style.CaroselcardTxt}>
                                Some ousome project from our Architectural studio.
                            </p>
                        </div>
                        <div className={style.CaroselCard}>
                            <img
                                className={style.CaroselCardImg}
                                src="images/building.png"
                                alt=""
                                width="280px"
                                height="150px"
                            />
                            <div className={style.CompanyName}>SVH Design Ltd</div>
                            <p className={style.CaroselcardTxt}>
                                Some ousome project from our Architectural studio.
                            </p>
                        </div>
                        <div className={style.CaroselCard}>
                            <img
                                className={style.CaroselCardImg}
                                src="images/architecture.jpg"
                                alt=""
                                width="280px"
                                height="150px"
                            />
                            <div className={style.CompanyName}>SVH Design Ltd</div>
                            <p className={style.CaroselcardTxt}>
                                Some ousome project from our Architectural studio.
                            </p>
                        </div>
                        <div className={style.CaroselCard}>
                            <img
                                className={style.CaroselCardImg}
                                src="images/architecture.jpg"
                                alt=""
                                width="280px"
                                height="150px"
                            />
                            <div className={style.CompanyName}>SVH Design Ltd</div>
                            <p className={style.CaroselcardTxt}>
                                Some ousome project from our Architectural studio.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className={style.allProjects}>
                <div className={style.galery}>
                    <div className={style.CaroselCard}>
                        <img
                            className={style.CaroselCardImg}
                            src="images/architecture.jpg"
                            alt=""
                            width="280px"
                            height="150px"
                        />
                        <div className={style.CompanyName}>SVH Design Ltd</div>
                        <p className={style.CaroselcardTxt}>
                            Some ousome project from our Architectural studio.
                        </p>
                    </div>

                    <div className={style.CaroselCard}>
                        <img
                            className={style.CaroselCardImg}
                            src="images/architecture.jpg"
                            alt=""
                            width="280px"
                            height="150px"
                        />
                        <div className={style.CompanyName}>SVH Design Ltd</div>
                        <p className={style.CaroselcardTxt}>
                            Some ousome project from our Architectural studio.
                        </p>
                    </div>

                    <div className={style.CaroselCard}>
                        <img
                            className={style.CaroselCardImg}
                            src="images/architecture.jpg"
                            alt=""
                            width="280px"
                            height="150px"
                        />
                        <div className={style.CompanyName}>SVH Design Ltd</div>
                        <p className={style.CaroselcardTxt}>
                            Some ousome project from our Architectural studio.
                        </p>
                    </div>

                    <div className={style.CaroselCard}>
                        <img
                            className={style.CaroselCardImg}
                            src="images/architecture.jpg"
                            alt=""
                            width="280px"
                            height="150px"
                        />
                        <div className={style.CompanyName}>SVH Design Ltd</div>
                        <p className={style.CaroselcardTxt}>
                            Some ousome project from our Architectural studio.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;