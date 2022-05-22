import React from 'react';
import style from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import telegramIcon from "./../assets/footerImages/telegram.png";
import instagramIcon from "./../assets/footerImages/instagram.png";
import githubIcon from "./../assets/footerImages/github.png";
import linkedInIcon from "./../assets/footerImages/linkedin.png";

export const Footer = () => {

    const telegramImg = {
        backgroundImage: `url(${telegramIcon})`
    };
    const instagramImg = {
        backgroundImage: `url(${instagramIcon})`
    };
    const githubImg = {
        backgroundImage: `url(${githubIcon})`,
        borderRadius: '10px'
    };
    const linkedInImg = {
        backgroundImage: `url(${linkedInIcon})`
    };

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <span className={style.title}>Ilya Anoshko</span>
                <div className={style.footer}>
                    <div style={telegramImg}></div><a href={'https://t.me/Ilya_Anoshko'} target={'_blank'}>Telegram</a>
                    <div style={instagramImg}></div><a href={'https://www.instagram.com/error_404__not__found_/'} target={'_blank'}>Instagram</a>
                    <div style={githubImg}></div><a href={'https://github.com/Ilya030290'} target={'_blank'} >Github</a>
                    <div style={linkedInImg}></div><a href={'https://www.linkedin.com/in/ilya-anoshko-3277a8238/'} target={'_blank'} >LinkedIn</a>
                </div>
                <span className={style.rights}>© 2022 All rights reserved  </span>
            </div>
        </div>
    );
};

