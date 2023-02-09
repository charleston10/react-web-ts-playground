import React from "react";
import {Error, Form, Loading,} from "./ViewState";
import './App.css';
import {useLoginPage} from "./hooks/useLoginPage";

export const LoginPage = () => {
    const {
        viewState,
        onChangeEmail,
        onChangePassword,
        onSubmit,
        refInputEmail,
        refInputPassword
    } = useLoginPage()

    return (
        <div className="App">
            <p>E-mail</p>
            <input
                ref={refInputEmail}
                type={"email"}
                value={(viewState as Form)?.email ?? refInputEmail.current!.value}
                onChange={onChangeEmail}/>

            {viewState instanceof Error && (viewState as Error).email && <p>E-mail inválido</p>}

            <p>Password</p>
            <input
                ref={refInputPassword}
                type={"password"}
                value={(viewState as Form)?.password ??  refInputPassword.current!.value}
                onChange={onChangePassword}/>

            {viewState instanceof Error && (viewState as Error).password && <p>Senha inválida</p>}

            <input type={"button"}
                   value={viewState instanceof Loading ? "Carregando" : "Entrar"}
                   onClick={onSubmit}
            />
        </div>
    );


}
