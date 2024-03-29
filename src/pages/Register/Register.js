import style from './Register.module.css';

import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

import { AuthContext } from '../../context/AuthContext';






const Register = () => {
    const {setCurrentUser} = useContext(AuthContext);
    
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [tac, setTac] = useState(false);



    const onSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return(alert('Invalid email or password'));
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setCurrentUser();
        } catch (error) {
            console.log(error.message);
        }
        
        navigate("/edit-profile");

    }

    return (
        <div id="id02" className={style["modal"]}>
            <form
                className={`${style["modal-content"]} ${style["animate"]}`}
                onSubmit={onSubmit}
            >
                <div className={style["container"]} style={{ backgroundColor: "#f1f1f1", borderRadius: "10px 10px 0px 0px" }}>
                    <h1>Registration for Professionals</h1>
                </div>
                <div className={style["container"]}>
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
                        <b>Password</b>
                    </label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        id="password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}} 
                    />

                    <label htmlFor="confirmPassword">
                        <b>Repeat Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Repeat Password"
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
                            By signing in or creating an account, you agree with our Terms & conditions and Privacy statement.
                        </span>
                    </label>
                    <button className={style["button"]} type="submit" disabled={!tac}>Registration</button>
                </div>
                <div className={style["container"]} style={{ backgroundColor: "#f1f1f1" }}>
                    <button
                        onClick={() => navigate('/')}
                        type="button"
                        className={`${style["cancelbtn"]} ${style["button"]}`}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>

    );
};

export default Register;