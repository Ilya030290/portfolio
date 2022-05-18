import React from 'react';
import style from "../Projects/Projects.module.css";
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./Project/Project";
import socialNetworkImage from "./../assets/projectsImages/3410348.jpg";
import todolistImage from "./../assets/projectsImages/619cef5c40cb8963c133f5fc_6076f40a7bc433d96f4663f4_template-vignette-TO-DO-LIST-1200x900.png"

export const Projects = () => {

    const socialNetworkImg = {
        backgroundImage: `url(${socialNetworkImage})`
    };
    const todolistImg = {
        backgroundImage: `url(${todolistImage})`
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container}  ${style.projectsContainer}`}>
                <div className={style.title}>
                    <h2>My <span>Projects</span></h2>
                </div>
                <div className={style.projects}>
                    <Project
                        title={"Social network"}
                        description={'This is private social network for people'}
                        style={socialNetworkImg}
                    />
                    <Project
                        title={"Todolist"}
                        description={'This is new todolist which you can use every day'}
                        style={todolistImg}
                    />
                </div>
            </div>
        </div>
    );
};

