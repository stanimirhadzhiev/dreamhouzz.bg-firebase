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
         category = "Архитектура и проектиране на сгради";
         var companyCollectionRef = query(collection(db, "users"), where("category", "==", "Архитектура и проектиране на сгради"));
    }
    else if(categories === 'interior-design'){
         category = "Интериорен дизайн";
         var companyCollectionRef = query(collection(db, "users"), where("category", "==", "Интериорен дизайн"));
    }
    else if(categories === 'landscape-architect'){
        category = "Ландшафтна архитектура";
        var companyCollectionRef = query(collection(db, "users"), where("category", "==", "Ландшафтна архитектура"));
    }
    else if(categories === 'building-companies'){
        category = "Строителство и ремонтни дейности";
        var companyCollectionRef = query(collection(db, "users"), where("category", "==", "Строителство и ремонтни дейности"));
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
                        <option>Всички градове</option>
                        <option>София</option>
                        <option>Пловдив</option>
                        <option>Варна</option>
                        <option>Бургас</option>
                        <option>Русе</option>
                        <option>Стара Загора</option> 
                        <option>Плевен</option>
                        <option>Добрич</option>
                        <option>Сливен</option>
                        <option>Шумен</option>
                        <option>Перник</option>
                        <option>Хасково</option>
                        <option>Ямбол</option>
                        <option>Пазарджик</option>
                        <option>Благоевград</option>
                        <option>Велико Търново</option>
                        <option>Враца</option>
                        <option>Габрово</option>
                        <option>Асеновград</option>
                        <option>Видин</option>
                        <option>Кърджали</option>
                        <option>Кюстендил</option>
                        <option>Монтана</option>
                        <option>Търговище</option>
                        <option>Силистра</option>
                        <option>Ловеч</option>
                        <option>Разград</option>
                        <option>Смолян</option>
                    </select>
                </div>
            </div>
            <div className={style.tableSection}>
                {userList.length > 0
                    ? userList.map(user => <Company key={user.id} user={user} />)
                    : <h3 className="no-articles">No articles yet</h3>
                }
            </div>
        </main>

    );
};
