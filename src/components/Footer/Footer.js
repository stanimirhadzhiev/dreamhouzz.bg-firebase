import style from './Footer.module.css';

import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className={style.footerSection}>
            <div className={style.footerContainer}>
                <div className={style.footerContainerFirstColumn}>
                    <div className={style.logo}>
                        <Link to="/">
                            <img src="images/logo2.png" alt="" />
                        </Link>
                    </div>
                    <div className={style.socialMediaContainer}>
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
                    <div className={style.copyright}>
                        ©2022 dreamhouzz.bg - Всички права запазени.
                    </div>
                </div>
                <div className={style.footerContainerSecondColumn}>
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
                <div className={style.footerContainerThirdColumn}>
                    <h4>За платформата:</h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;