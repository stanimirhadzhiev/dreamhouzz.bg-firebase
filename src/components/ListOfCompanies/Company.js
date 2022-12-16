import style from './Company.module.css';

import { CompanyContext } from '../../context/CompanyContext';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

export const Company = ({user}) => {
    const {setSelectedUser} = useContext(CompanyContext);
    const navigate = useNavigate();
    
    const clickHandler = (e) =>{
        e.preventDefault();
        setSelectedUser(user);
        navigate('/profile-page')
    };

    return(
            <div className={style.tableRow} onClick= {clickHandler}>
                <div className={style.tableRowIMG}>
                    <img src="images/pexels-photo-1571460.jpeg" alt="" />
                </div>
                <div className={style.companyInformation}>
                    <div className={style.basicInformation}>
                        <img className={style.peopleIMG} src={user.avatarImageUrl} alt="" />
                        <div className={style.basicInformationTxt}>
                            <div className={style.companyName}>{user.companyName}</div>
                            <div className={style.ratingSection}>
                                <span>4.0</span>
                                <span className={`${style.star} ${style.star1}`} />
                                <span className={`${style.star} ${style.star2}`} />
                                <span className={`${style.star} ${style.star2}`} />
                                <span className={`${style.star} ${style.star2}`} />
                                <span className={`${style.star} ${style.star2}`} />
                                <span className={style.numReviews}>30 Ревюта</span>
                            </div>
                        </div>
                        <div></div>
                        <div className={style.city}>
                            {user.city}
                        </div>
                    </div>
                    <div className={style.moreInformation}>
                        {user.companyInformation}
                    </div>
                </div>
            </div>
    );
};

