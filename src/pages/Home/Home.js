import style from './Home.module.css';
import { useEffect, useState } from 'react';
import { ProjectGallery } from '../../components/ProjectGallery/ProjectGallery';


const Home = () => {
    
    
    return (
        <main className={style.mainSection}>
            <div className={style.aboutUsAndRegistration}>
                <div className={style.aboutusContainer}>
                    <div className={style.aboutusInfo}>
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
                <div className={style.registrationContainer}>
                    <h3 className={style.registrationProgramName}>
                        <img src={require("../../assets/images/icons/icons8-company-16.png")} alt="" />
                        DreamHouZz Pro
                    </h3>
                    <h2>Join Millions of Home Professionals</h2>
                    <p>
                        Get the all-in-one tool for marketing, CRM and project management
                    </p>
                </div>
            </div>
            <ProjectGallery/>
        </main>
    );
};

export default Home;