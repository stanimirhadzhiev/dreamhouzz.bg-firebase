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
const [category, setCategory] = useState("Architects & Building Designers");
const [companyInformation, setCompanyInformation] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [url, setUrl] = useState("");
const [city, setCity] = useState("All Cities");
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
    userService.createUser(userData, user);

    navigate("/");
};



const onClickEditUser = async (e) =>{
    e.preventDefault();
    userService.editUser(userData, user);
    
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
            <h1 className={style.title}>Company information</h1>
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
                                    {avatarImageUpload && <button onClick={uploadAvatarImage}>Add Profile picture</button>}
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
                        <b>Company name</b>
                    </label>
                    <input
                        className={style.inputStyle}
                        type="text"
                        placeholder="Company name"
                        name="companyName"
                        id="companyName"
                        defaultValue={currentUser.companyName}
                        onChange={(e) => {setCompanyName(e.target.value)}}
                    />
                </div>

                <div className={style.row}>
                    <label htmlFor="category">
                        <b>Chose category</b>
                    </label>
                    <select 
                        className={style.inputStyle} 
                        name="category" 
                        id="category" 
                        placeholder="Chose category"
                        defaultValue={currentUser.category}
                        onChange={(e) => {setCategory(e.target.value)}}
                    >
                        <option >Architects & Building Designers</option>
                        <option >Interior Design</option>
                        <option >Landscape Architects</option>
                        <option >Construction and renovation</option>
                    </select>
                </div>

                <div className={style.row}>
                    <label htmlFor="companyInformation">
                        <b>Company information</b>
                    </label>
                    <textarea 
                        className={style.inputStyle} 
                        name="companyInformation" 
                        id="companyInformation" 
                        placeholder="Company information"
                        defaultValue={currentUser.companyInformation}
                        onChange={(e) => {setCompanyInformation(e.target.value)}}
                    >   
                    </textarea>
                </div>

                <div>
                    <h2>Contacts:</h2>
                 
                    <div className={style.row}>
                        <label htmlFor="firstName">
                            <b>Person for contact</b>
                        </label>
                        <input 
                            className={style.inputStyle}
                            type="text" 
                            placeholder="First name" 
                            name="firstName"
                            defaultValue={currentUser.firstName}
                            onChange={(e) => {setFirstName(e.target.value)}}
                        />
                        <input 
                            className={style.inputStyle}
                            type="text" 
                            placeholder="Last name" 
                            name="lastName" 
                            defaultValue={currentUser.lastName}
                            onChange={(e) => {setLastName(e.target.value)}}
                        />
                    </div>

                    <div className={style.row}>
                        <label htmlFor="phoneNumber">
                            <b>Phone number</b>
                        </label>
                        <input 
                            className={style.inputStyle}
                            type="number" 
                            placeholder="Phone number" 
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
                            <b>Chose City</b>
                        </label>
                        <select 
                            id="city" 
                            name="city" 
                            className={style.selectCity}
                            defaultValue={currentUser.city}
                            onChange={(e) => {setCity(e.target.value)}}
                        >
                            <option >All Cities</option>
                            <option >Sofia</option>
                            <option >Plovdiv</option>
                            <option >Varna</option>
                            <option >Bourgas</option>
                            <option >Ruse</option>
                            <option >Stara Zagora</option> 
                            <option >Pleven</option>
                            <option >Dobrich</option>
                            <option >Sliven</option>
                            <option >Shumen</option>
                            <option >Pernik</option>
                            <option >Haskovo</option>
                            <option >Jambol</option>
                            <option >Pazardzhik</option>
                            <option >Blagoevgrad</option>
                            <option >Veliko Tarnovo</option>
                            <option >Vraca</option>
                            <option >Gabrovo</option>
                            <option >Asenovgrad</option>
                            <option >Vidin</option>
                            <option >Kardzhali</option>
                            <option >Kiustendil</option>
                            <option >Montana</option>
                            <option >Targovishte</option>
                            <option >Silistra</option>
                            <option >Lovech</option>
                            <option >Razgrad</option>
                            <option >Smolian</option>
                        </select>
                        <label htmlFor="street">
                            <b>Address</b>
                        </label>
                        <input
                            className={style.inputStyle}
                            type="text"
                            placeholder="Address"
                            name="street"
                            id="street"
                            defaultValue={currentUser.street}
                            onChange={(e) => {setStreet(e.target.value)}}
                        />
                    </div>
                    
                </div>
                {currentUser.id
                    ?   <button onClick={onClickEditUser} className={style.button}>Edit</button>
                    :   <button onClick={onClickCreateUser} className={style.button}>Create Profile</button>
                }
                
            </form>
        </div>
    );
};


export default EditProfile;