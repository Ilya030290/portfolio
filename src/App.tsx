import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";

export const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <Skills />
        </div>
    );
};


