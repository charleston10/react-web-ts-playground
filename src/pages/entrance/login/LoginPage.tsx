import React from "react";
import {Error, Form, Loading,} from "./ViewState";
import './App.css';
import {useLoginPage} from "./hooks/useLoginPage";

export const LoginPage = () => {
    const {viewState, inputEmail, inputPassword, onChangeEmail, onChangePassword, onSubmit} = useLoginPage()

    return (
        <div className="App">
            <p>E-mail</p>
            <input ref={inputEmail}
                   type={"email"}
                   value={(viewState as Form)?.email ?? undefined}
                   onChange={onChangeEmail}/>

            {(viewState as Error)?.email && <p>E-mail inválido</p>}

            <p>Password</p>
            <input ref={inputPassword}
                   type={"password"}
                   value={(viewState as Form)?.email ?? undefined}
                   onChange={onChangePassword}/>

            {(viewState as Error)?.password && <p>Senha inválida</p>}

            <input type={"button"}
                   value={viewState instanceof Loading ? "Carregando" : "Entrar"}
                   onClick={onSubmit}
            />
        </div>
    );


}
