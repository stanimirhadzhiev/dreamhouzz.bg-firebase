import style from './CreateProject.module.css';

import { doc, setDoc } from "firebase/firestore";
import { db, storage } from '../../firebaseConfig';
import {
    ref,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { CompanyContext } from '../../context/CompanyContext';

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';



export const CreateProject = () => {
    const {user} = useContext(AuthContext);
    const {projectId} = useContext(CompanyContext);
    let navigate = useNavigate();

    const [projectName, setProjectName] = useState("");
    const [projectInformation, setProjectInformation] = useState("");
    const [imageUpload, setImageUpload] = useState({});
    const [imageUrls, setImageUrls] = useState([]);

    const projectCollectionRef = doc(db, "projects", `${projectId}`);
    const projectImagesRef = ref(storage, `${user.uid}/project-pictures/${projectId}/${imageUpload.name}`);
    
    
    const createProject = async (e) =>{
        e.preventDefault();

        await setDoc(projectCollectionRef, {
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
   
    return(
        <div className={style.container}>
            <h1 className={style.title}>Project information</h1>
            <form className={style.formContainer}  >
                
                <div className={style.row}>
                    <label htmlFor="projectName">
                        <b>Project name</b>
                    </label>
                    <input
                        className={style.inputStyle}
                        type="text"
                        placeholder="Project name"
                        name="projectName"
                        id="projectName"
                        value={projectName}
                        onChange={(e) => {setProjectName(e.target.value)}}
                    />
                </div>

                <div className={style.row}>
                    <label htmlFor="projectInformation">
                        <b>Project information</b>
                    </label>
                    <textarea 
                        className={style.inputStyle} 
                        name="projectInformation" 
                        id="projectInformation" 
                        placeholder="Project information"
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
                            <label htmlFor="uploadImg" className={style["img-upload"]}>Add picture</label>
                            <input  type="file" id="uploadImg" name="uploadImg" hidden onChange={(e) => {setImageUpload(e.target.files[0])}}/>
                        </div>
                    </div>
                </div>

                <button onClick={createProject} className={style.button}> Create Project</button>
            </form>
        </div>
    );
};