import React from 'react';
import style from "../Projects/Projects.module.css";
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./Project/Project";

export const Projects = () => {
    const myProjects = [
        {image: '', title: "Social network", description: 'This is private social network for people'},
        {image: '', title: "Todolist", description: 'This is new todolist which you can use every day'}
    ];

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container}  ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    {
                        myProjects.map((el, id) =>
                            <Project key={id}
                                     image={el.image}
                                     title={el.title}
                                     description={el.description}
                            />)
                    }
                </div>
            </div>
        </div>
    );
};

