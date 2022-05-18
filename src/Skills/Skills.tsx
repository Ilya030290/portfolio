import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    const mySkills = [
        {title: 'HTML', description: 'Lorem ipsum, some asdsadsadsds sdsdsadasd sdaasdasda text for skill html, css', icon: ''},
        {title: 'CSS', description: 'Lorem ipsum, some text sdfsdfdsfdsfdsfsadsadsad for skill css', icon: ''},
        {title: 'JavaScript', description: 'some text asdsadsadsds sdsdsadasd sdaasdasda for skill javascript', icon: ''},
        {title: 'Redux', description: 'some text asdsadsadsds sdsdsadasd sdaasdasda for skill redux', icon: ''},
        {title: 'React', description: 'some text asdsadsadsds sdsdsadasd ssda for skill react', icon: ''}
    ];
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container}  ${style.skillsContainer}`}>
                <div className={style.title}>
                    <h2>My <span>Skills</span></h2>
                </div>
                <div className={style.skills}>
                    {
                        mySkills.map((el, id) =>
                            <Skill key={id}
                                   title={el.title}
                                   description={el.description}
                                   icon={el.icon}
                            />)
                    }
                </div>
            </div>
        </div>
    );
};

