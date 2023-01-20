import style from './ProfilePageHeader.module.css';

import { Link } from 'react-router-dom'
import { DynamicStar } from 'react-dynamic-star';

export const ProfilePageHeader = ({selectedUser}) =>{
    return(
        <div>
            <div className={style["profile-page--header"]}>
                
                <img className={style["avatar"]} src={selectedUser.avatarImageUrl} alt="" />
                <div className={style["basicInformationTxt"]}>
                    <div className={style["companyName"]}>
                        {selectedUser.companyName}
                    </div>
                    <div className={style["rating-wrapper"]}>
                        <div className={style["row"]}>
                            <span>2.5</span>
                            <DynamicStar 
                                rating={2.5}
                                outlined={2.5} 
                                width={23} 
                                height={23} 
                                sharpnessStar={2.5}
                                totalStars={5}
                                emptyStarColor={"transparent"}
                                fullStarColor={"#FFBC00"}
                            />
                            <span>30 Reviews</span>
                        </div>
                        
                        <div>
                            <Link to={'/review'} className={style["button"]}>Write a Review</Link>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            <div className={style["companyNavigation"]}>
                <nav>
                    <a href="#">About Us</a>
                    <span>|</span>
                    <a href="#">Projects</a>
                    <span>|</span>
                    <a href="#">Credentials</a>
                    <span>|</span>
                    <a href="#">Reviews</a>
                </nav>
            </div>
        </div>
    );
};