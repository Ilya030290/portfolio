import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Skill} from "./Skill/Skill";
import htmlIcon from "./../assets/skillsImages/html.png";
import cssIcon from "./../assets/skillsImages/css-3.png";
import jsIcon from "./../assets/skillsImages/js.png";
import reduxIcon from "./../assets/skillsImages/redux.png";
import reactIcon from "./../assets/skillsImages/structure.png";

export const Skills = () => {

    const htmlImg = {
        backgroundImage: `url(${htmlIcon})`
    };
    const cssImg = {
        backgroundImage: `url(${cssIcon})`
    };
    const jsImg = {
        backgroundImage: `url(${jsIcon})`
    };
    const reduxImg = {
        backgroundImage: `url(${reduxIcon})`
    };
    const reactImg = {
        backgroundImage: `url(${reactIcon})`
    };

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container}  ${style.skillsContainer}`}>
                <div className={style.title}>
                    <h2>My <span>Skills</span></h2>
                </div>
                <div className={style.skills}>
                    <Skill
                        title={'HTML'}
                        description={'I have a skill in HTML'}
                        style={htmlImg}
                    />
                    <Skill
                        title={'CSS'}
                        description={'I have a skill in CSS'}
                        style={cssImg}
                    />
                    <Skill
                        title={'JavaScript'}
                        description={'I have a skill in JavaScript'}
                        style={jsImg}
                    />
                    <Skill
                        title={'Redux'}
                        description={'I have a skill in Redux'}
                        style={reduxImg}
                    />
                    <Skill
                        title={'React'}
                        description={'I have a skill in React'}
                        style={reactImg}
                    />
                </div>
            </div>
        </div>
    );
};

