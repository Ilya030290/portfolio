import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    const mySkills = [
        {title: 'HTML, CSS', description: 'Lorem ipsum, some asdsadsadsds sdsdsadasd sdaasdasda text for skill html, css', icon: ''},
        {title: 'JS', description: 'Lorem ipsum, some text sdfsdfdsfdsfdsfsadsadsad for skill javascript', icon: ''},
        {title: 'React', description: 'some text asdsadsadsds sdsdsadasd sdaasdasda for skill react', icon: ''}
    ];
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container}  ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
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

