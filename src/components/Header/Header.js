import style from './Header.module.css';

import { AuthContext } from '../../context/AuthContext';
import { CompanyContext } from '../../context/CompanyContext';

import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import v4 from 'react-uuid';



const Header = () => {
    const {user} = useContext(AuthContext);
    const { setProjectId } = useContext(CompanyContext);
    const navigate = useNavigate();

    const createProjectId = (e) =>{
        e.preventDefault();
        setProjectId(() => v4());
        navigate('/create-project');
    };
    
    
    return (
        <header className={style.headerSection}>
            <div className={style.headerFirstContainer}>
                <div className={style.logo}>
                    <Link to="/">
                        <img src="images/logo.png" alt="" />
                    </Link>
                </div>
                <div className={style.searchSection}>
                    <Link className={style.srcBTN} to="#"></Link>
                    <input
                    className={style.searchBox}
                    type="search"
                    name="searchBox"
                    id="searchBox"
                    />
                </div>
                <div className={style.regContainer}>
                   {user ?
                           <div className={style.user}>
                                
                                <button className={style.button}>
                                    <div className={style.dropdown}>
                                        {/* <img  className={style.avatarIMG} src="images/icons/avatar.png" /> */}
                                        <div className={style.signInBTNtext}>
                                            {/* Профил */}
                                            <span className="material-symbols-outlined">manage_accounts</span>
                                            <span className="material-symbols-outlined">arrow_drop_down</span>
                                        </div>
                                        <div className={style["dropdown-content"]}>
                                            <h3 className={style["dropdown-header"]}>{user.email}</h3>
                                            <Link to="/profile-page">Profile</Link>
                                            <Link to="/edit-profile">Edit profile</Link>
                                            <Link  onClick={createProjectId}>Create project</Link>
                                            <Link to="#">Add certificates</Link>
                                            <Link to="#">Change password</Link>
                                            <Link to="#">Change e-mail</Link>
                                        </div>
                                    </div>
                                </button>
                                
                                <button className={style.button}>
                                    <Link to="/logout">
                                        <span className="material-symbols-outlined">Logout</span>
                                        {/* <span className={style.signInBTNtext}>Изход</span> */}
                                    </Link>
                                </button>
                            </div>
                        :
                           <div className={style.guest}>
                                <div className={style.button}>
                                    <Link to="/login"  >
                                        {/* <span className={style.userIcon} /> */}
                                        <span className={style.signInBTNtext}>Login</span>
                                    </Link>
                                </div>
                                
                                <div className={style.button}>
                                    <Link to ="/register"  >
                                        {/* <span className={style.registrationIcon} /> */}
                                        <span className={style.registrationBTNtext}>Register</span>
                                    </Link>
                                </div>
                            </div>
                    
                   }
                    
                    
                </div>
            </div>
            <nav className={style.headerNavigation}>
                <div className={style.navContainer}>
                    <Link to="/architecture-companies" className={style.navBTN}>
                        <div className={style.architectsImgBTN} />
                        <div className={style.navTxtBTN}>
                            Architects & Building Designers
                        </div>
                    </Link>
                    <span>|</span>
                    <Link to="/interior-design" className={style.navBTN}>
                        <div className={style.interiorDesignImgBTN} />
                        <div className={style.navTxtBTN}>Interior Design</div>
                    </Link>
                    <span>|</span>
                    <Link to="/landscape-architect" className={style.navBTN}>
                        <div className={style.landscapeImgBTN} />
                        <div className={style.navTxtBTN}>Landscape Architects</div>
                    </Link>
                    <span>|</span>
                    <Link to="/building-companies" className={style.navBTN}>
                        <div className={style.buildingImgBTN} />
                        <div className={style.navTxtBTN}>Construction and renovation</div>
                    </Link>
                </div>
            </nav>
        </header>  
    );
};

export default Header;