import style from './Contacts.module.css';

export const Contacts = ({selectedUser}) =>{
    return(
        <div className={style["container"]}>
            <div className={style["message-wrapper"]}>
                <a href={"mailto:" + selectedUser.email} className={style["button"]}>Send message</a>
            </div>
            <div className={style["contact-wrapper"]}>
                <a href={"tel:" + selectedUser.phoneNumber} className={style["contact-row"]} target="_blank">
                    <img className={style["contact-icon"]} src={require('../../assets/images/icons/icons8-phone-24.png')} />
                    <div className={style["contact-text"]}>{selectedUser.phoneNumber}</div>
                </a>
                <a href={selectedUser.url} className={style["contact-row"]}>
                    <img className={style["contact-icon"]} src={require('../../assets/images/icons/icons8-website-24.png')} />
                    <div className={style["contact-text"]} >{selectedUser.url}</div>
                </a>
                <div className={style["contact-row"]}>
                    <img className={style["contact-icon"]} src={require('../../assets/images/icons/icons8-map-marker-24.png')} />
                    <div className={style["contact-text"]}> {selectedUser.city} , {selectedUser.street}</div>
                </div>
            </div>
        </div>
    );
};