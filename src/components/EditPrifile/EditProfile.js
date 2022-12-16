import style from './EditProfile.module.css';

import { storage } from '../../firebaseConfig';
import {
    ref,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import * as userService from '../../services/userService'







const EditProfile = () => {
const {user} = useContext(AuthContext);
let navigate = useNavigate();
const [companyName, setCompanyName] = useState("");
const [category, setCategory] = useState("Архитектура и проектиране на сгради");
const [companyInformation, setCompanyInformation] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [url, setUrl] = useState("");
const [city, setCity] = useState("Всички градове");
const [street, setStreet] = useState("");
const [ avatarImageUpload, setAvatarImageUpload ] = useState(null);
const [avatarImageUrl, setAvatarImageUrl] = useState("");

const [currentUser, setCurrentUser] = useState({});

const avatarImagesRef = ref(storage, `${user.uid}/profile-pictures/avatar.png`);

const userData = {
    companyName,
    category,
    companyInformation,
    firstName,
    lastName,
    phoneNumber,
    url,
    city,
    street,
    avatarImageUrl,
    email: user.email, 
    id: user.uid,
};

const uploadAvatarImage = async (e) => {
    e.preventDefault();
    await uploadBytes(avatarImagesRef, avatarImageUpload).then((snapshot) => {
        getDownloadURL(avatarImagesRef).then((url) => {
            setAvatarImageUrl(url);
        });
    });
    setAvatarImageUpload(null)
};


const onClickCreateUser = async (e) => {
    e.preventDefault();
    userService.createUser(userData, user)

    navigate("/");
};



const onClickEditUser = async (e) =>{
    e.preventDefault();
    userService.editUser(userData, user)
    
    navigate("/");
};



useEffect(() => {
    if (!user) {
      navigate("/login");
    }else{
        userService.getUser( setCurrentUser, user );
    } 
  }, []);
  
    return (
        <div className={style.container}>
            <h1 className={style.title}>Информация за фирмата</h1>
            <form className={style.formContainer}  >
                <div className={style.row}>
                    <div className={style["col"]}>
                        {!currentUser.avatarImageUrl ?
                                <>
                                    <div className={style["img-upload-button"]}>
                                        <label htmlFor="myfile" className={style["img-upload"]}>+</label>
                                        <input  
                                            type="file" 
                                            id="myfile" 
                                            name="myfile"
                                            defaultValue={currentUser.avatarImageUrl}
                                            hidden onChange={(e) => {setAvatarImageUpload(e.target.files[0])}}
                                        />
                                    </div>
                                    {avatarImageUpload && <button onClick={uploadAvatarImage}>Качи Аватар</button>}
                                </>
                            :
                                <div >
                                    <img src={currentUser.avatarImageUrl} alt="" className={style["avatar-img"]}/>
                                </div>
                        }  
                    </div>
                </div>
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
                        defaultValue={currentUser.companyName}
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
                        defaultValue={currentUser.category}
                        onChange={(e) => {setCategory(e.target.value)}}
                    >
                        <option >Архитектура и проектиране на сгради</option>
                        <option >Интериорен дизайн</option>
                        <option >Ландшафтна архитектура</option>
                        <option >Строителство и ремонтни дейности</option>
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
                        defaultValue={currentUser.companyInformation}
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
                            defaultValue={currentUser.firstName}
                            onChange={(e) => {setFirstName(e.target.value)}}
                        />
                        <input 
                            className={style.inputStyle}
                            type="text" 
                            placeholder="Фамилия" 
                            name="lastName" 
                            defaultValue={currentUser.lastName}
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
                            defaultValue={currentUser.phoneNumber}
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
                            defaultValue={currentUser.url}
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
                            defaultValue={currentUser.city}
                            onChange={(e) => {setCity(e.target.value)}}
                        >
                            <option >Всички градове</option>
                            <option >София</option>
                            <option >Пловдив</option>
                            <option >Варна</option>
                            <option >Бургас</option>
                            <option >Русе</option>
                            <option >Стара Загора</option> 
                            <option >Плевен</option>
                            <option >Добрич</option>
                            <option >Сливен</option>
                            <option >Шумен</option>
                            <option >Перник</option>
                            <option >Хасково</option>
                            <option >Ямбол</option>
                            <option >Пазарджик</option>
                            <option >Благоевград</option>
                            <option >Велико Търново</option>
                            <option >Враца</option>
                            <option >Габрово</option>
                            <option >Асеновград</option>
                            <option >Видин</option>
                            <option >Кърджали</option>
                            <option >Кюстендил</option>
                            <option >Монтана</option>
                            <option >Търговище</option>
                            <option >Силистра</option>
                            <option >Ловеч</option>
                            <option >Разград</option>
                            <option >Смолян</option>
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
                            defaultValue={currentUser.street}
                            onChange={(e) => {setStreet(e.target.value)}}
                        />
                    </div>
                    
                </div>
                {currentUser.id
                    ?   <button onClick={onClickEditUser} className={style.button}>Редактирай</button>
                    :   <button onClick={onClickCreateUser} className={style.button}>Създай профил</button>
                }
                
            </form>
        </div>
    );
};


export default EditProfile;