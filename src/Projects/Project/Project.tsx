import React from 'react';
import style from './Project.module.css';

type ProjectPropsType = {
    image: string
    title: string
    description: string
}

export const Project: React.FC<ProjectPropsType> = ({image, title, description}) => {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <button className={style.button}>Watch</button>
            </div>
            <div className={style.title}>{title}</div>
            <span className={style.description}>{description}</span>
        </div>
    );
};

