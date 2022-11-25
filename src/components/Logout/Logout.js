import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth'
import { auth } from '../../firebaseConfig'


const Logout =  ({setIsAuth}) =>{
    const navigate = useNavigate();
    signOut(auth)
        .then(() => {
            localStorage.clear();
            setIsAuth(false);
            navigate('/')
        })   
};

export default Logout;