import { doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';



export const createUser = async (userData, user) => {
    const userRef = doc(db, "users", `${user.uid}`);
    await setDoc(userRef, userData);
};



export const editUser = async (userData, user) =>{
    const userRef = doc(db, "users", `${user.uid}`);
    await updateDoc(userRef, userData);
};

export const getUser = async (setCurrentUser, user) =>{
    const userRef = doc(db, "users", `${user.uid}`); 
    const userData = await getDoc(userRef);

    if (userData.exists()) {
        setCurrentUser(userData.data())
    // console.log("Document data:", docSnap.data());
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
};

// export const deleteUser = async () =>{
//     await deleteDoc(userRef)
// };