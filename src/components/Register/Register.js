import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig'

 
import style from './Register.module.css';




const Register = ({setIsAuth}) => {
    const infoRef = useRef();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [tac, setTac] = useState(false);



    const onSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return(alert('Wrong email or password'));
        }

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
        
        navigate("/edit-profile");

    }

    return (
        <div id="id02" className={style.modal}>
            <form
                className={`${style.modalContent} ${style.animate}`}
                onSubmit={onSubmit}
            >
                <div className={style.container} style={{ backgroundColor: "#f1f1f1", borderRadius: "10px 10px 0px 0px" }}>
                    <h1>Регистрация за фирми</h1>
                </div>
                <div className={style.container}>
                    <label htmlFor="email">
                        <b>E-mail</b>
                    </label>
                    <input 
                        type="text" 
                        placeholder="E-mail" 
                        name="email" 
                        id="email"
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
                        id="password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}} 
                    />

                    <label htmlFor="confirmPassword">
                        <b>Повторете Паролата</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Повторете Паролата"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => {setConfirmPassword(e.target.value)}}
                    />

                    <label>
                        <input 
                            type="checkbox" 
                            name="tac"
                            value={tac}
                            onChange={(e) => {setTac(e.target.value)}} 
                        />
                        <span>
                        Декларирам, че съм запознат и приемам Правилата за поверителност,
                        Общите условия и Защитата на личните данни на DreamHouZz.bg
                        </span>
                    </label>
                    <button className={style.button} type="submit">Регистрация</button>
                </div>
                <div className={style.container} style={{ backgroundColor: "#f1f1f1" }}>
                    <button
                        onClick={() => navigate('/')}
                        type="button"
                        className={`${style.cancelbtn} ${style.button}`}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>

    );
};

export default Register;