import style from './Architect.module.css'
import { Link } from 'react-router-dom';

const Architect = () => {
    return (
        <main className={style.tableMainSection}>
            <div className={style.filterSection}>
                <h1>Архитектура &amp; проектиране на сгради</h1>
                <div className={style.dropDown}>
                <select id="city" name="city" className={style.selectCity}>
                    <option>Всички градове</option>
                    <option>София</option>
                    <option>Пловдив</option>
                    <option>Варна</option>
                    <option>Бургас</option>
                    <option>Русе</option>
                    <option>Стара Загора</option> 
                    <option>Плевен</option>
                    <option>Добрич</option>
                    <option>Сливен</option>
                    <option>Шумен</option>
                    <option>Перник</option>
                    <option>Хасково</option>
                    <option>Ямбол</option>
                    <option>Пазарджик</option>
                    <option>Благоевград</option>
                    <option>Велико Търново</option>
                    <option>Враца</option>
                    <option>Габрово</option>
                    <option>Асеновград</option>
                    <option>Видин</option>
                    <option>Кърджали</option>
                    <option>Кюстендил</option>
                    <option>Монтана</option>
                    <option>Търговище</option>
                    <option>Силистра</option>
                    <option>Ловеч</option>
                    <option>Разград</option>
                    <option>Смолян</option>
                </select>
                </div>
            </div>
            <div className={style.tableSection}>
                <Link to="companyProfilPage.html">
                    <div className={style.tableRow}>
                        <div className={style.tableRowIMG}>
                            <img src="images/pexels-photo-1571460.jpeg" alt="" />
                        </div>
                        <div className={style.companyInformation}>
                            <div className={style.basicInformation}>
                                <img className={style.peopleIMG} src="images/people.jpg" alt="" />
                                <div className={style.basicInformationTxt}>
                                    <div className={style.companyName}> SVH Build Ltd.</div>
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
                            </div>
                            <div className={style.moreInformation}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
                                eaque vel aspernatur ad laboriosam repellendus. Porro placeat nobis
                                quibusdam doloremque provident ipsum excepturi molestias impedit aut
                                ea. Vel, necessitatibus itaque.
                            </div>
                        </div>
                        <div className={style.companyContact}>
                            <button className="sendMessageBTN">Изпрати съобщение</button>
                            <div className="companyAddress">
                                гр. Бургас, ж.к. Славейков, бл. 205
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </main>

    );
};

export default Architect;