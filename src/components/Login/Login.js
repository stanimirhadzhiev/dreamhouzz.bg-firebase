
import {useNavigate, Link} from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { useState } from "react";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


import styles from './Login.module.css';


const Login = () => {
    const {setCurrentUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onSubmit = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setCurrentUser()
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                if(errorCode === "auth/wrong-password"){
                    alert("Wrong password");
                };
            });
    };
    return (

        <div id="id01" className={styles.modal} >
            <form
                className={`${styles.modalContent} ${styles.animate}`}
                onSubmit={onSubmit}
            >
                <div className={styles.imgcontainer}>
                    <span
                        onClick={() => navigate('/')}
                        className={styles.close}
                        title="Close Modal"
                    >
                        ×
                    </span>
                    <img
                        src="images/icons/110-1100707_person-avatar-placeholder.png"
                        alt="Avatar"
                        className={styles.avatar}
                    />
                </div>
                <div className={styles.container}>
                    <label htmlFor="email">
                        <b>E-mail</b>
                    </label>
                    <input 
                        type="text" 
                        placeholder="E-mail" 
                        name="email"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}  
                    />

                    <label htmlFor="password">
                        <b>Парола</b>
                    </label>
                    <input 
                        type="password" 
                        placeholder="Парола" 
                        name="password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}  
                    />

                    <button className={styles.button} type="submit">Влез</button>
                    {/* <label htmlFor="remember">
                        <input type="checkbox" defaultChecked="checked" name="remember" />
                        Запомни ме
                    </label> */}
                    </div>
                    <div className={styles.container} style={{ backgroundColor: "#f1f1f1" }}>
                    <button
                        className={styles.cancelbtn}
                        type="button"
                        onClick={() => navigate('/')}
                    >
                        Cancel
                    </button>
                    <span className={styles.psw}>
                        Забравена<Link to="#">парола?</Link>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Login;