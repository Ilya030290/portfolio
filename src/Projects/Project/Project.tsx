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
                <img className={style.image}
                     src={image}
                     alt={'image'}
                />
                <button className={style.button}>Watch</button>
            <h3 className={style.title}>{title}</h3>
            <span className={style.description}>
                {description}
            </span>
        </div>
    );
};

