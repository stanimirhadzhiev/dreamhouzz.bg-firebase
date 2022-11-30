import { Link } from 'react-router-dom';
import style from './ArchitectureCompanie.module.css'

const ArchitectureCompanie = ({user}) => {
    console.log({user});
    return(
        <Link to="/profile-page">
            <div className={style.tableRow}>
                <div className={style.tableRowIMG}>
                    <img src="images/pexels-photo-1571460.jpeg" alt="" />
                </div>
                <div className={style.companyInformation}>
                    <div className={style.basicInformation}>
                        <img className={style.peopleIMG} src="images/people.jpg" alt="" />
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
        </Link>
    );
};

export default ArchitectureCompanie;