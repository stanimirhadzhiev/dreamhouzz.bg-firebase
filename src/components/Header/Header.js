import { Link } from 'react-router-dom';

import styles from './Header.module.css';



const Header = ({ isAuth, user }) => {
    return (
        <header className={styles.headerSection}>
            <div className={styles.headerFirstContainer}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src="images/logo.png" alt="" />
                    </Link>
                </div>
                <div className={styles.searchSection}>
                    <Link className={styles.srcBTN} to="#"></Link>
                    <input
                    className={styles.searchBox}
                    type="search"
                    name="searchBox"
                    id="searchBox"
                    />
                </div>
                <div className={styles.regContainer}>
                   {isAuth ?
                           <div className={styles.user}>
                                
                                <button className={styles.signInBTN}>
                                    <div className={styles.dropdown}>
                                        {/* <img  className={styles.avatarIMG} src="images/icons/avatar.png" /> */}
                                        <div className={styles.signInBTNtext}>
                                            {/* Профил */}
                                            <span className="material-symbols-outlined">manage_accounts</span>
                                            <span className="material-symbols-outlined">arrow_drop_down</span>
                                        </div>
                                        <div className={styles["dropdown-content"]}>
                                            <h3 className={styles["dropdown-header"]}>{user.email}</h3>
                                            <Link to="#">Профил</Link>
                                            <Link to="#">Редактирай профил</Link>
                                            <Link to="#">Промяна на парола</Link>
                                            <Link to="#">Промяна на e-mail</Link>
                                        </div>
                                    </div>
                                </button>
                                
                                <button className={styles.signInBTN}>
                                    <Link to="/logout">
                                        <span className="material-symbols-outlined">logout</span>
                                        {/* <span className={styles.signInBTNtext}>Изход</span> */}
                                    </Link>
                                </button>
                            </div>
                        :
                           <div className={styles.guest}>
                                <div className={styles.signInBTN}>
                                    <Link to="/login"  >
                                        {/* <span className={styles.userIcon} /> */}
                                        <span className={styles.signInBTNtext}>Вход</span>
                                    </Link>
                                </div>
                                
                                <div className={styles.registrationBTN}>
                                    <Link to ="/register"  >
                                        {/* <span className={styles.registrationIcon} /> */}
                                        <span className={styles.registrationBTNtext}>Регистрация</span>
                                    </Link>
                                </div>
                            </div>
                    
                   }
                    
                    
                </div>
            </div>
            <nav className={styles.headerNavigation}>
                <div className={styles.navContainer}>
                    <Link to="/architecture-companies" className={styles.navBTN}>
                        <div className={styles.architectsImgBTN} />
                        <div className={styles.navTxtBTN}>
                            Архитектура и проектиране на сгради
                        </div>
                    </Link>
                    <span>|</span>
                    <Link to="/interior-design" className={styles.navBTN}>
                        <div className={styles.interiorDesignImgBTN} />
                        <div className={styles.navTxtBTN}>Интериорен дизайн</div>
                    </Link>
                    <span>|</span>
                    <Link to="/landscape-architect" className={styles.navBTN}>
                        <div className={styles.landscapeImgBTN} />
                        <div className={styles.navTxtBTN}>Ландшафтна архитектура</div>
                    </Link>
                    <span>|</span>
                    <Link to="/building-companies" className={styles.navBTN}>
                        <div className={styles.buildingImgBTN} />
                        <div className={styles.navTxtBTN}>Строителство и ремонтни дейности</div>
                    </Link>
                </div>
            </nav>
        </header>  
    );
};

export default Header;