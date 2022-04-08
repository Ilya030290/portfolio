import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {RemoteHire} from "./Remote Hire/RemoteHire";

export const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <Skills />
            <Projects />
            <RemoteHire />
        </div>
    );
};


