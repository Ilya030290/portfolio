import React from 'react';
import style from './Skill.module.css';

type SkillPropsType = {
    title: string
    description: string
    icon: string
}

export const Skill: React.FC<SkillPropsType> = ({title, description, icon}) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{title}</h3>
            <span className={style.description}>
                {description}
            </span>
        </div>
    );
};