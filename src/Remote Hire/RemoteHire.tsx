import React from 'react';
import style from './RemoteHire.module.scss';
import styleContainer from "../common/styles/Container.module.css";


export const RemoteHire = () => {
    return (
        <div className={style.remoteHireBlock}>
            <div className={`${styleContainer.container} ${style.remoteHireContainer}`}>
                <div className={style.title}>
                    <h2>Considering  <span>remote hire</span></h2>
                </div>
                <a href={''} className={`${style.hire} ${style.super}`} >Hire me</a>
            </div>
        </div>
    );
};

