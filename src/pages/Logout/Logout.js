import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { AuthContext } from '../../context/AuthContext';

import { useNavigate } from "react-router-dom";
import { useContext } from "react";


const Logout =  () =>{
    const {userLogout} = useContext(AuthContext);
    const navigate = useNavigate();
    signOut(auth)
        .then(() => {
            userLogout()
            navigate('/')
        })   
};

export default Logout;