import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container}  ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"HTML"} description={"Lorem ipsum html"}/>
                    <Skill title={"CSS"} description={"Lorem ipsum css"}/>
                    <Skill title={"JS"} description={"Lorem ipsum js"}/>
                    <Skill title={"React"} description={"Lorem ipsum react"}/>
                </div>
            </div>
        </div>
    );
};

