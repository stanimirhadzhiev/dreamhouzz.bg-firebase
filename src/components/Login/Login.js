
import {useNavigate, Link} from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { useState } from "react";


import styles from './Login.module.css';


const Login = ({setIsAuth}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onSubmit =  (e) => {
        e.preventDefault();
        const user =  signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                localStorage.setItem("isAuth", true);
                setIsAuth(true);
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        navigate("/");
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

                    <button type="submit">Влез</button>
                    {/* <label htmlFor="remember">
                        <input type="checkbox" defaultChecked="checked" name="remember" />
                        Запомни ме
                    </label> */}
                    </div>
                    <div className={styles.container} style={{ backgroundColor: "#f1f1f1" }}>
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="cancelbtn"
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