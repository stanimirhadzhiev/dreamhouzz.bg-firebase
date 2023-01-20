import style from './Credentials.module.css'

export const Credentials = () =>{
    return(
        <div className={style["container"]}>
            <div className={style["image"]}>
                <img src={require("../../assets/images/S45C-515020408290-page-001.jpg")} alt="" width="385px" height="257px" />
            </div>
            <div className={style["image"]}>
                <img src={require("../../assets/images/DOC003-page-001.jpg")} alt="" width="385px" height="257px" />
            </div>
            <div className={style["image"]}>
                <img src={require("../../assets/images/Udostoverenie-page-001.jpg")} alt="" width="385px" height="257px" />
            </div>
        </div>
    );
};