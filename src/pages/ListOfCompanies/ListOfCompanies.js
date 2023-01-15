import style from './ListOfCompanies.module.css';

import { collection, query, where, getDocs} from "firebase/firestore";
import { db } from '../../firebaseConfig';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Company } from "./Company";



export const ListOfCompanies = () => {
    const { categories } = useParams();

    const [ userList, setUserList ] = useState([]);
    

    let category = "";

    if( categories === 'architecture-companies'){
         category = "Architects & Building Designers";
         var companyCollectionRef = query(collection(db, "users"), where("category", "==", "Architects & Building Designers"));
    }
    else if(categories === 'interior-design'){
         category = "Interior Design";
         var companyCollectionRef = query(collection(db, "users"), where("category", "==", "Interior Design"));
    }
    else if(categories === 'landscape-architect'){
        category = "Landscape Architects";
        var companyCollectionRef = query(collection(db, "users"), where("category", "==", "Landscape Architects"));
    }
    else if(categories === 'building-companies'){
        category = "Construction and renovation";
        var companyCollectionRef = query(collection(db, "users"), where("category", "==", "Construction and renovation"));
    }

    

    useEffect(() => {
        const getUserList = async () => {
            const data = await getDocs(companyCollectionRef);
            setUserList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getUserList();
      }, [category]);
      
    return (
        <main className={style.tableMainSection}>
            <div className={style.filterSection}>
                <h1>{category}</h1>
                <div className={style.dropDown}>
                    <select id="city" name="city" className={style.selectCity}>
                        <option >All Cities</option>
                        <option >Sofia</option>
                        <option >Plovdiv</option>
                        <option >Varna</option>
                        <option >Bourgas</option>
                        <option >Ruse</option>
                        <option >Stara Zagora</option> 
                        <option >Pleven</option>
                        <option >Dobrich</option>
                        <option >Sliven</option>
                        <option >Shumen</option>
                        <option >Pernik</option>
                        <option >Haskovo</option>
                        <option >Jambol</option>
                        <option >Pazardzhik</option>
                        <option >Blagoevgrad</option>
                        <option >Veliko Tarnovo</option>
                        <option >Vraca</option>
                        <option >Gabrovo</option>
                        <option >Asenovgrad</option>
                        <option >Vidin</option>
                        <option >Kardzhali</option>
                        <option >Kiustendil</option>
                        <option >Montana</option>
                        <option >Targovishte</option>
                        <option >Silistra</option>
                        <option >Lovech</option>
                        <option >Razgrad</option>
                        <option >Smolian</option>
                    </select>
                </div>
            </div>
            <div className={style.tableSection}>
                {userList.length > 0
                    ? userList.map(user => <Company key={user.id} user={user} />)
                    : <h3 className="no-articles">No companies yet</h3>
                }
            </div>
        </main>

    );
};
