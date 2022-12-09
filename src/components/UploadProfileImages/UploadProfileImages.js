import style from './UploadProfileImages.module.css';

import {
    ref,
    uploadBytes,
  } from "firebase/storage";

import { db, storage } from '../../firebaseConfig'

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { async } from '@firebase/util';

export const UploadProfileImages = ({isAuth, user}) =>{
    let navigate = useNavigate();

    
    const [ bannerImageUpload, setBannerImageUpload ] = useState(null);

    
    

    const metadata = {
        contentType: 'image/jpeg',
      };

    

    const uploadBanner =  (e) =>{
        e.preventDefault();
        const bannerImagesRef = ref(storage, `${user.uid}/profile-pictures/bbanner/bbanner.jpeg`);
         uploadBytes(bannerImagesRef, bannerImageUpload, metadata).then((snapshot) => {
            console.log('Uploaded a banner!');
        });
        setBannerImageUpload(null)
    }
    console.log(bannerImageUpload);

    return(
        <div className={style.container}>
            <div className={`${style.row} ${style["flex-row"]}`}>
                <div className={style["col"]}>
                    
                        <div className={style["img-upload-button"]}>
                            <label htmlFor="myfile" className={style["img-upload"]}>+</label>
                            <input  type="file" id="myfile" name="myfile" hidden onChange={(e) => {setBannerImageUpload(e.target.files[1])}}/>
                        </div>
                        <button onClick={uploadBanner} className={style.button}>Upload Banner</button>
                    
                </div>
                
            </div>
            
            
        </div>
    );
};