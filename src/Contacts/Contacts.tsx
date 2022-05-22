import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <div className={style.title}>
                    <h2>My <span>Contacts</span></h2>
                </div>
                <div className={style.mail}>
                    <h2>Mail:</h2>
                    <span>https://anoshko90@mail.ru</span>
                    <span>https://anoshko9079@gmail.com</span>
                </div>
                <div className={style.phone}>
                    <h2>Phone:</h2>
                    <span>+375292196011</span>
                </div>
            </div>
        </div>
    );
};

