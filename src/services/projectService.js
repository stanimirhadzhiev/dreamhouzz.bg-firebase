import { async } from "@firebase/util";
import { collection, getDocs, query, where, serverTimestamp } from "firebase/firestore";
import { db } from '../firebaseConfig';

// const  updateTimestamp = await updateDoc(userRef, {
//     timestamp: serverTimestamp()
// });

// Get All Projects

export const getAllProjects = async (setProjectList) =>{
    const data = await getDocs(collection(db, "projects"));
    setProjectList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};

// Get All Projects of Author

export const getAllAuthorProjects = async (setProjectList, selectedUser) => {
    var projectCollectionRef = query(collection(db, "projects"), where("id", "==", `${selectedUser.id}`));
    const data = await getDocs(projectCollectionRef);
    setProjectList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};



// Get One Project

// export const getOneProject = async() =>{
//     const userRef = doc(db, "projects", `${user.uid}`); 
//     const userData = await getDoc(userRef);

//     if (userData.exists()) {
//         setSelectedUser(userData.data())
    
//     } else {
    
//     console.log("No such document!");
//     }
// };
