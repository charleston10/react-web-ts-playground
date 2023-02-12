import React from 'react';
import ReactDOM from 'react-dom/client';

import {LoginPage} from "./presentation/pages/entrance/login/LoginPage";

import './presentation/scss/App.scss'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <LoginPage/>
);
