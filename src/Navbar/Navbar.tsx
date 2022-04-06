import React from 'react';
import style from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={style.navbar}>
            <a href={""}>Главная</a>
            <a href={""}>Скиллы</a>
            <a href={""}>Проекты</a>
            <a href={""}>Контакты</a>
        </div>
    );
};

