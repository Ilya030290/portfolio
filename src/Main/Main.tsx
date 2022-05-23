import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import mainPhoto from '../assets/mainPhoto/220190035_882950875638101_810745229767205643_n.jpg';

export const Main = () => {

    const photo = {
        backgroundImage: `url(${mainPhoto})`
    }

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There!</span>
                    <h1><span>I am</span> Ilya Anoshko</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo} style={photo}></div>
            </div>
        </div>
    );
};

