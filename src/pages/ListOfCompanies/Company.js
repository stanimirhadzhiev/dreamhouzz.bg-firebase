import style from './Company.module.css';

import { DynamicStar } from 'react-dynamic-star';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { CompanyContext } from '../../context/CompanyContext';


export const Company = ({user}) => {
    const {setSelectedUser} = useContext(CompanyContext);
    const navigate = useNavigate();
    
    const clickHandler = (e) =>{
        e.preventDefault();
        setSelectedUser(user);
        navigate(`/${user.id}/profile-page`)
    };
    
    return(
            <div className={style["container"]} onClick= {clickHandler}>
                <img src={require("../../assets/images/pexels-photo-1571460.jpeg")} alt=""  className={style["image"]}/>
                <div className={style["information-wrapper"]}>
                    <div className={style["header"]}>
                        <img className={style["avatar"]} src={user.avatarImageUrl} alt="" />
                        <div className={style["col"]}>
                            <div className={style["company-name"]}>{user.companyName}</div>
                            <div className={style["rating-wrapper"]}>
                                <span>2.5</span>
                                <DynamicStar
                                    rating={2.5}
                                    outlined={2.5}
                                    width={15}
                                    height={15}
                                    sharpnessStar={2.5}
                                    totalStars={5}
                                    emptyStarColor={"transparent"}
                                    fullStarColor={"#FFBC00"}
                                />
                                <span>30 Reviews</span>
                            </div>
                        </div>
                        <div className={style["city"]}>
                            {user.city}
                        </div>
                    </div>
                    <div className={style ["information"]}>
                        {user.companyInformation}
                    </div>
                </div>
            </div>
    );
};

