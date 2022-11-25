const InteriorDesign = () => {
    return (
        <main className="tableMainSection">
            <div className="filterSection">
                <h1>Интериорен дизайн</h1>
                <div className="dropDown">
                    <select id="city" name="city" className="selectCity">
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
            <div className="tableSection">
                <a href="companyProfilPage.html">
                    <div className="tableRow">
                        <div className="tableRowIMG">
                            <img src="images/pexels-photo-1571460.jpeg" alt="" />
                        </div>
                        <div className="companyInformation">
                            <div className="basicInformation">
                                <img className="peopleIMG" src="images/people.jpg" alt="" />
                                <div className="basicInformationTxt">
                                    <div className="companyName"> SVH Build Ltd.</div>
                                    <div className="ratingSection">
                                        <span>4.0</span>
                                        <span className="star star1" />
                                        <span className="star star2" />
                                        <span className="star star3" />
                                        <span className="star star4" />
                                        <span className="star star5" />
                                        <span className="numReviews">30 Ревюта</span>
                                    </div>
                                </div>
                            </div>
                            <div className="moreInformation">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
                                eaque vel aspernatur ad laboriosam repellendus. Porro placeat nobis
                                quibusdam doloremque provident ipsum excepturi molestias impedit aut
                                ea. Vel, necessitatibus itaque.
                            </div>
                        </div>
                        <div className="companyContact">
                            <button className="sendMessageBTN">Изпрати съобщение</button>
                            <div className="companyAddress">
                                гр. Бургас, ж.к. Славейков, бл. 205
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </main>

    );
};

export default InteriorDesign;