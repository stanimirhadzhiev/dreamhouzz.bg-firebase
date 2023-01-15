import style from './Login.module.css';

import { signInWithEmailAndPassword } from 'firebase/auth'
import { AuthContext } from '../../context/AuthContext';
import { auth } from '../../firebaseConfig'

import {useNavigate} from "react-router-dom";
import { useState, useContext } from "react";





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

        <div id="id01" className={style.modal} >
            <form
                className={`${style.modalContent} ${style.animate}`}
                onSubmit={onSubmit}
            >
                <div className={style.imgcontainer}>
                    <span
                        onClick={() => navigate('/')}
                        className={style.close}
                        title="Close Modal"
                    >
                        ×
                    </span>
                    <img
                        src={require("../../assets/images/icons/avatar.png")}
                        alt="Avatar"
                        className={style.avatar}
                    />
                </div>
                <div className={style.container}>
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
                        <b>Password</b>
                    </label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}  
                    />

                    <button className={style.button} type="submit">Login</button>

                </div>
                <div className={style.container} style={{ backgroundColor: "#f1f1f1" }}>
                    <button
                        className={style.cancelbtn}
                        type="button"
                        onClick={() => navigate('/')}
                    >
                        Cancel
                    </button>
                    {/* <span className={style.psw}>
                        Забравена<Link to="#">парола?</Link>
                    </span> */}
                </div>
            </form>
        </div>
    );
}

export default Login;