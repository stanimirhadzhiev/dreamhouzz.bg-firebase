import style from './ArchitectureCompaniesList.module.css'

import { useEffect, useState } from 'react';

import ArchitectureCompanie from "./ArchitectureCompanie";

import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { db } from '../../firebaseConfig'

const ArchitectureCompaniesList = () => {
    const [architecturalCompanies, setArchitecturalCompanies] = useState([]);
    const companyCollectionRef = query(collection(db, "users"), where("category", "==", "Архитектура и проектиране на сгради"));

    useEffect(() => {
        const getArchitecturalCompanies = async () => {
          const data = await getDocs(companyCollectionRef);
          setArchitecturalCompanies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getArchitecturalCompanies();
      }, []);
    return (
        <main className={style.tableMainSection}>
            <div className={style.filterSection}>
                <h1>Архитектура и проектиране на сгради</h1>
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
                {architecturalCompanies.length > 0
                    ? architecturalCompanies.map(x => <ArchitectureCompanie key={x.id} user={x} />)
                    : <h3 className="no-articles">No articles yet</h3>
                }

                {/* <ArchitectureCompanie architecturalCompanies={architecturalCompanies}/> */}
            </div>
        </main>

    );
};

export default ArchitectureCompaniesList;