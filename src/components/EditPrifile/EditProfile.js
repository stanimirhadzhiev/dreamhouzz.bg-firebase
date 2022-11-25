import style from './EditProfile.module.css'
import { collection, addDoc } from "firebase/firestore";

import { db, auth } from '../../firebaseConfig'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



const EditProfile = ({isAuth}) => {
const navigate = useNavigate();

const [companyName, setCompanyName] = useState("");
const [category, setCategory] = useState("architectureAndDesign");
const [companyInformation, setCompanyInformation] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [url, setUrl] = useState("");
const [city, setCity] = useState("allCitties");
const [street, setStreet] = useState("");


const values = {companyName, category, companyInformation, firstName, lastName, phoneNumber, url, city, street};
const usersCollectionRef = collection(db, "users");


const createUser = async () => {
        await addDoc(usersCollectionRef, {
        values
    });
    navigate('/')
};
console.log(values); 

    return (
        <div className={style.container}>
            <h1 className={style.title}>Информация за фирмата</h1>
            <form className={style.formContainer}  >
                <div className={style.row}>
                    <label htmlFor="companyName">
                        <b>Име на фирмата</b>
                    </label>
                    <input
                        className={style.inputStyle}
                        type="text"
                        placeholder="Име на фирмата"
                        name="companyName"
                        id="companyName"
                        value={companyName}
                        onChange={(e) => {setCompanyName(e.target.value)}}
                    />
                </div>

                <div className={style.row}>
                    <label htmlFor="category">
                        <b>Избери категория</b>
                    </label>
                    <select 
                        className={style.inputStyle} 
                        name="category" 
                        id="category" 
                        placeholder="Избери категория"
                        value={category} 
                        onChange={(e) => {setCategory(e.target.value)}}
                    >
                        <option value="architectureAndDesign">Архитектура &amp; проектиране на сгради</option>
                        <option value="interiorDesign">Интериорен дизайн</option>
                        <option value="landscapeArchitecture">Ландшафтна архитектура</option>
                        <option value="constructionAndRepair">Строителство и ремонтни дейности</option>
                    </select>
                </div>

                <div className={style.row}>
                    <label htmlFor="companyInformation">
                        <b>Информация за фирмата</b>
                    </label>
                    <textarea 
                        className={style.inputStyle} 
                        name="companyInformation" 
                        id="companyInformation" 
                        placeholder="Информация за фирмата"
                        value={companyInformation}
                        onChange={(e) => {setCompanyInformation(e.target.value)}}
                    >   
                    </textarea>
                </div>

                <div>
                    <h2>Данни за контакт:</h2>
                    <div className={style.row}>
                        <label htmlFor="firstName">
                            <b>Лице за контакт</b>
                        </label>
                        <input 
                            className={style.inputStyle}
                            type="text" 
                            placeholder="Име" 
                            name="firstName"
                            value={firstName}
                            onChange={(e) => {setFirstName(e.target.value)}}
                        />
                        <input 
                            className={style.inputStyle}
                            type="text" 
                            placeholder="Фамилия" 
                            name="lastName" 
                            value={lastName}
                            onChange={(e) => {setLastName(e.target.value)}}
                        />
                    </div>

                    <div className={style.row}>
                        <label htmlFor="phoneNumber">
                            <b>Телефонен номер</b>
                        </label>
                        <input 
                            className={style.inputStyle}
                            type="number" 
                            placeholder="Телефонен номер" 
                            name="phoneNumber" 
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => {setPhoneNumber(e.target.value)}}
                        />
                    </div>

                    <div className={style.row}>
                        <label htmlFor="url">
                            <b>Website</b>
                        </label>
                        <input
                            className={style.inputStyle}
                            type="url"
                            placeholder="https://example.com"
                            name="url"
                            id="url"
                            value={url}
                            onChange={(e) => {setUrl(e.target.value)}}
                        />
                    </div>

                    <div className={style.row}>
                        
                        <label htmlFor="city">
                            <b>Избери град</b>
                        </label>
                        <select 
                            id="city" 
                            name="city" 
                            className={style.selectCity}
                            value={city} 
                            onChange={(e) => {setCity(e.target.value)}}
                        >
                            <option value="allCitties">Всички градове</option>
                            <option value="sofia">София</option>
                            <option value="plovdiv">Пловдив</option>
                            <option value="varna">Варна</option>
                            <option value="burgas">Бургас</option>
                            <option value="ruse">Русе</option>
                            <option value="staraZagora">Стара Загора</option> 
                            <option value="pleven">Плевен</option>
                            <option value="dobrich">Добрич</option>
                            <option value="sliven">Сливен</option>
                            <option value="shumen">Шумен</option>
                            <option value="pernik">Перник</option>
                            <option value="haskovo">Хасково</option>
                            <option value="yambol">Ямбол</option>
                            <option value="pazardzhik">Пазарджик</option>
                            <option value="blagoevgrad">Благоевград</option>
                            <option value="velikoTarnovo">Велико Търново</option>
                            <option value="vraca">Враца</option>
                            <option value="gabrovo">Габрово</option>
                            <option value="asenovgrad">Асеновград</option>
                            <option value="vidin">Видин</option>
                            <option value="kardzhali">Кърджали</option>
                            <option value="kiustendil">Кюстендил</option>
                            <option value="montana">Монтана</option>
                            <option value="targovishte">Търговище</option>
                            <option value="silistra">Силистра</option>
                            <option value="lovech">Ловеч</option>
                            <option value="razgrad">Разград</option>
                            <option value="smolqn">Смолян</option>
                        </select>
                        <label htmlFor="street">
                            <b>Адрес</b>
                        </label>
                        <input
                            className={style.inputStyle}
                            type="text"
                            placeholder="Адрес"
                            name="street"
                            id="street"
                            value={street}
                            onChange={(e) => {setStreet(e.target.value)}}
                        />
                    </div>
                </div>

                
                <button onClick={createUser}>Редактирай</button>
            </form>
        </div>
    );
};


export default EditProfile;