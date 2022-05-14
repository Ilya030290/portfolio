import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <span className={style.title}>
                    My Contacts
                </span>
                <form action="url" className={style.form}>
                    <input/>
                    <input/>
                    <textarea></textarea>
                </form>
                <button className={style.sendButton} type={"submit"}>Send</button>
            </div>
        </div>
    );
};

