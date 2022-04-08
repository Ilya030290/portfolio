import React from 'react';
import style from './RemoteHire.module.css';
import styleContainer from "../common/styles/Container.module.css";


export const RemoteHire = () => {
    return (
        <div className={style.remoteHireBlock}>
            <div className={`${styleContainer.container} ${style.remoteHireContainer}`}>
                <span className={style.title}>
                    Considering remote work options
                </span>
                <button className={style.hireButton}>Hire me</button>
            </div>
        </div>
    );
};

