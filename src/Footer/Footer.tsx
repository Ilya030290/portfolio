import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <span className={style.title}>Ilya Anoshko</span>
                <div className={style.footer}>
                    <a href={''}></a>
                    <a href={''}></a>
                    <a href={''}></a>
                    <a href={''}></a>
                </div>
                <span className={style.rights}>© 2022 All rights reserved  </span>
            </div>
        </div>
    );
};

