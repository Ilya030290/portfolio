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

