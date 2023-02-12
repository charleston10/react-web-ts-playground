import React from 'react';
import ReactDOM from 'react-dom/client';

import {LoginPage} from "./pages/entrance/login/LoginPage";

import './scss/App.scss'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <LoginPage/>
);
