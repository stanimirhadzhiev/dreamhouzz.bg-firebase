import style from './CreateProject.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import { doc, setDoc } from "firebase/firestore";
import {
    ref,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";
import { db, storage } from '../../firebaseConfig';



export const CreateProject = () => {
    const {user} = useContext(AuthContext);
    let navigate = useNavigate();

    const [projectName, setProjectName] = useState("");
    const [projectInformation, setProjectInformation] = useState("");
    const [imageUpload, setImageUpload] = useState({});
    const [imageUrls, setImageUrls] = useState([]);

    const usersCollectionRef = doc(db, "projects", `${v4()}`);
    const projectImagesRef = ref(storage, `${user.uid}/project-pictures/${imageUpload.name}`);
    
    console.log(imageUpload);
    const createProject = async (e) =>{
        e.preventDefault();

        await setDoc(usersCollectionRef, {
            projectName,
            projectInformation,
            imageUrls,
            email: user.email,
            id: user.uid
        });
        navigate("/");
    };



    useEffect(() => {
        if(imageUpload.name){
            uploadBytes(projectImagesRef, imageUpload).then((snapshot) => {
                getDownloadURL(projectImagesRef).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
                
            });
        };
        
    }, [imageUpload]);
    console.log(imageUrls);
    return(
        <div className={style.container}>
            <h1 className={style.title}>Информация за проекта</h1>
            <form className={style.formContainer}  >
                
                <div className={style.row}>
                    <label htmlFor="projectName">
                        <b>Име на проекта</b>
                    </label>
                    <input
                        className={style.inputStyle}
                        type="text"
                        placeholder="Име на проекта"
                        name="projectName"
                        id="projectName"
                        value={projectName}
                        onChange={(e) => {setProjectName(e.target.value)}}
                    />
                </div>

                <div className={style.row}>
                    <label htmlFor="projectInformation">
                        <b>Описание на проекта</b>
                    </label>
                    <textarea 
                        className={style.inputStyle} 
                        name="projectInformation" 
                        id="projectInformation" 
                        placeholder="Информация за проекта"
                        value={projectInformation}
                        onChange={(e) => {setProjectInformation(e.target.value)}}
                    >   
                    </textarea>
                </div>

                <div className={style.row}>
                    <div className={style["col"]}>
                        <div key={user.uid }>
                            {imageUrls.map((url) => {
                                return <img src={url}  className={style["card-img"]}/>;
                            })}
                        </div>
                        <div className={style["card-img"]}>
                            <label htmlFor="uploadImg" className={style["img-upload"]}>Добави снимка</label>
                            <input  type="file" id="uploadImg" name="uploadImg" hidden onChange={(e) => {setImageUpload(e.target.files[0])}}/>
                            {/* <button onClick={uploadImage}>upload</button> */}
                        </div>
                    </div>
                </div>

                <button onClick={createProject} className={style.button}> Добави проект</button>
            </form>
        </div>
    );
};