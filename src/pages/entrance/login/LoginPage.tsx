import './Login.scss';

import React from "react";
import {Error, Form, Loading,} from "./ViewState";
import {useLoginPage} from "./hooks/useLoginPage";

export const LoginPage = () => {
    const {
        viewState,
        onChangeEmail,
        onChangePassword,
        onClickSubmit,
        onClickForgotPassword,
        refInputEmail,
        refInputPassword
    } = useLoginPage()

    return (
        <div className={"container"}>
            <div className="row justify-content-center">
                <div className="col-4 bg-white rounded-4 d-flex flex-column p-4 mt-4">
                    <form>
                        <div className={"mb-3"}>
                            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">E-mail</label>
                            <input
                                id={"inputEmail"}
                                className="form-control"
                                ref={refInputEmail}
                                type={"email"}
                                value={(viewState as Form)?.email ?? refInputEmail.current!.value}
                                onChange={onChangeEmail}/>

                            {viewState instanceof Error && (viewState as Error).email && <p>E-mail inválido</p>}
                        </div>

                        <div className={"mb-3"}>
                            <label htmlFor="inputPassword" className="form-label">Password</label>
                            <input
                                id={"inputPassword"}
                                className="form-control"
                                ref={refInputPassword}
                                type={"password"}
                                value={(viewState as Form)?.password ?? refInputPassword.current!.value}
                                onChange={onChangePassword}/>

                            {viewState instanceof Error && (viewState as Error).password && <p>Senha inválida</p>}
                        </div>

                        <button
                            type="button"
                            className="btn btn-primary "
                            onClick={onClickSubmit}>

                            {viewState instanceof Loading ? "Carregando" : "Entrar"}

                            {viewState instanceof Loading &&
                                <div className="spinner-border spinner-border-sm ms-2" role="status"/>}
                        </button>

                        <button
                            type="button"
                            className="btn btn-text ms-2"
                            onClick={onClickForgotPassword}>
                            Esqueci minha senha
                        </button>
                    </form>

                    <hr className={"mt-4 mb-4"}/>

                    <div className={"row"}>
                        <p className={"sm"}>Ainda não é um mebro? <a href={"#"}>Cadastre-se agora</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
