import style from './Home.module.css';
import { MdAccountBalance } from "react-icons/md";
import { Link } from 'react-router-dom';

import { ProjectGallery } from '../../components/ProjectGallery/ProjectGallery';


const Home = () => {
    
    
    return (
        <main>
            <div className={style["container"]}>
                <div className={style["information-wrapper"]}>
                    <div className={style["information"]}>
                        <h1> The Best Place to Find Professionals.</h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                        repellendus at voluptatibus dolores distinctio officiis
                        consequuntur eligendi eaque obcaecati temporibus quis, molestiae
                        repudiandae, minus molestias mollitia dolorum eveniet adipisci
                        fugit?
                        </p>
                    </div>
                </div>
                <div className={style["registration-wrapper"]}>
                    <h3 className={style["registration-title"]}>
                        <MdAccountBalance className={style["icon"]}/>
                        DreamHouZz Pro
                    </h3>
                    <h2>Join Millions of Home Professionals</h2>
                    <p>
                        Get the all-in-one tool for marketing, CRM and project management
                    </p>
                    <Link to={"/register"} className={style["button"]}>Register</Link>
                </div>
            </div>
            <div className={style["gallery-wrapper"]}>
                <h2>All Projects</h2>
                <ProjectGallery/>
            </div>
            
        </main>
    );
};

export default Home;