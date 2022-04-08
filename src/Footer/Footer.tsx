import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <span className={style.title}>Ilya Anoshko</span>
                <div className={style.footer}>
                    <a href={''}>Telegram</a>
                    <a href={''}>Instagram</a>
                    <a href={''}>WhatsApp</a>
                </div>
                <span className={style.rights}>© 2022 All rights reserved  </span>
            </div>
        </div>
    );
};

