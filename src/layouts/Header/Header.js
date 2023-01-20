import style from './Header.module.css';

import * as userService from '../../services/userService';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MdManageAccounts, MdLogout } from "react-icons/md";
import v4 from 'react-uuid';

import { AuthContext } from '../../context/AuthContext';
import { CompanyContext } from '../../context/CompanyContext';
import { ProjectContext } from '../../context/ProjectContext';




const Header = () => {
    const {user} = useContext(AuthContext);
    const { setSelectedUser } = useContext(CompanyContext);
    const { setProjectId } = useContext(ProjectContext);
    const navigate = useNavigate();
    
    const createProjectId = (e) =>{
        e.preventDefault();
        setProjectId(() => v4());
        navigate('/create-project');
    };

    const clickHandler = (e) =>{
        e.preventDefault();
        userService.getUser( setSelectedUser, user );
        navigate(`/${user.uid}/profile-page`);
    };
    
    
    return (
        <header className={style["header"]}>
            <div className={style["container"]}>
                <div className={style["logo"]}>
                    <Link to="/">
                        <img src={require("../../assets/images/logo.png")} alt="No image" />
                    </Link>
                </div>
                <div className={style["search-wrapper"]}>
                    <Link className={style["search-button"]} to="#"></Link>
                    <input
                    className={style["search-box"]}
                    type="search"
                    name="searchBox"
                    id="searchBox"
                    />
                </div>
                <div>
                    {user ?
                        <div className={style["user"]}>
                            <div className={style["dropdown"]}>
                                <MdManageAccounts className={style["icons"]} />
                                <div className={style["dropdown-content"]}>
                                    <h3 className={style["dropdown-header"]}>{user.email}</h3>
                                    <Link onClick={clickHandler}>Profile</Link>
                                    <Link to={`/${user.uid}/edit-profile`}>Edit profile</Link>
                                    <Link onClick={createProjectId}>Create project</Link>
                                    <Link to="#">Add credentials</Link>
                                    <Link to="#">Change password</Link>
                                    <Link to="#">Change e-mail</Link>
                                </div>
                            </div>

                            <Link to="/logout">
                                <MdLogout className={style["icons"]} />
                            </Link>
                        </div>
                        :
                        <div className={style["guest"]}>
                            <div className={style["button"]}>
                                <Link to="/login"  >
                                    <span>Login</span>
                                </Link>
                            </div>

                            <div className={style["button"]}>
                                <Link to="/register"  >
                                    <span className={style["reg-button-text"]}>Register</span>
                                </Link>
                            </div>
                        </div>
                    }  
                </div>
            </div>
            <nav className={style["nav"]}>
                <ul className={style["nav-wrapper"]}>
                    <li>
                        <Link to="/architecture-companies" className={style["nav-button"]}>
                                Architects & Building Designers
                        </Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link to="/interior-design" className={style["nav-button"]}>
                            Interior Design
                        </Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link to="/landscape-architect" className={style["nav-button"]}>
                            Landscape Architects
                        </Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link to="/building-companies" className={style["nav-button"]}>
                            Construction and renovation
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>  
    );
};

export default Header;


