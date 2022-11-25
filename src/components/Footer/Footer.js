import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return(
        <footer className={styles.footerSection}>
            <div className={styles.footerContainer}>
                <div className={styles.footerContainerFirstColumn}>
                    <div className={styles.logo}>
                        <Link to="/">
                            <img src="images/logo2.png" alt="" />
                        </Link>
                    </div>
                    <div className={styles.socialMediaContainer}>
                        <Link to="#">
                            <img src="images/icons/icons8-facebook-48.png" alt="" />
                        </Link>
                        <Link to="#">
                            <img src="images/icons/icons8-instagram-48.png" alt="" />
                        </Link>
                        <Link to="#">
                            <img src="images/icons/icons8-linkedin-48.png" alt="" />
                        </Link>
                    </div>
                    <div className={styles.copyright}>
                        ©2022 dreamhouzz.bg - Всички права запазени.
                    </div>
                </div>
                <div className={styles.footerContainerSecondColumn}>
                    <h4>Категории:</h4>
                    <Link to="/architecture-companies">
                        <div>Архитектура &amp; проектиране на сгради</div>
                    </Link>
                    <Link to="/interior-design">
                        <div>Интериорен дизайн</div>
                    </Link>
                    <Link to="/landscape-architect">
                        <div>Ландшафтна архитектура</div>
                    </Link>
                    <Link to="/building-companies">
                        <div>Строителство и ремонтни дейности</div>
                    </Link>
                </div>
                <div className={styles.footerContainerThirdColumn}>
                    <h4>За платформата:</h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;