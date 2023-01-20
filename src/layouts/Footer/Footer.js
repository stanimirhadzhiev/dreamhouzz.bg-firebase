import style from './Footer.module.css';

import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className={style["container"]}>
                <div className={style["column"]}>
                    <Link to="/" className={style["logo"]}>
                        <img  src={require("../../assets/images/logo2.png")} alt="" />
                    </Link>
                    <div className={style["social-media-wrapper"]}>
                        <Link to="#">
                            <img src={require("../../assets/images/icons/icons8-facebook-48.png")} alt="" />
                        </Link>
                        <Link to="#">
                            <img src={require("../../assets/images/icons/icons8-instagram-48.png")} alt="" />
                        </Link>
                        <Link to="#">
                            <img src={require("../../assets/images/icons/icons8-linkedin-48.png")} alt="" />
                        </Link>
                    </div>
                    <div className={style["copyright"]}>
                        ©2022 dreamhouzz.bg 
                    </div>
                </div>
                <div className={style["column"]}>
                    <h4>Category:</h4>
                    <Link to="/architecture-companies">
                        <div>Architects & Building Designers</div>
                    </Link>
                    <Link to="/interior-design">
                        <div>Interior Design</div>
                    </Link>
                    <Link to="/landscape-architect">
                        <div>Landscape Architects</div>
                    </Link>
                    <Link to="/building-companies">
                        <div>Construction and renovation</div>
                    </Link>
                </div>
                <div className={style["column"]}>
                    <h4>About us:</h4>
                </div>
        </footer>
    );
};

export default Footer;