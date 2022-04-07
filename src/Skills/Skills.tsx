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
                    <Skill title={"HTML, CSS"} description={"Lorem ipsum, some text for css and html"}/>
                    <Skill title={"JS"} description={"Lorem ipsum, some text for skill javascript"}/>
                    <Skill title={"React"} description={"Lorem ipsum, some text for skill react"}/>
                </div>
            </div>
        </div>
    );
};

