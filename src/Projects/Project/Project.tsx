import React from 'react';
import s from './Project.module.scss';

type ProjectPropsType = {
    title: string
    description: string
    style: any
}

export const Project: React.FC<ProjectPropsType> = ({title, description, style}) => {
    return (
        <div className={s.project}>
            <div className={s.imageContainer} style={style}>
                <a href={''} className={s.link}>Watch</a>
            </div>
            <div className={s.title}>{title}</div>
            <span className={s.description}>{description}</span>
        </div>
    );
};

