import './Login.scss';

import React from "react";
import {Error, Form, Loading, Success,} from "./ViewState";
import {useLoginPage} from "./hooks/useLoginPage";
import {InputForm} from "../../../components/input";

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

    const error = (viewState as Error)
    const form = (viewState as Form)

    return (
        <div className={"container"}>
            <div className="row justify-content-center">
                <div className="col-4 bg-white rounded-4 d-flex flex-column p-4 mt-4">
                    <form>
                        <fieldset disabled={viewState instanceof Loading}>

                            <InputForm innerRef={refInputEmail}
                                       id={"inputEmail"}
                                       label={"Email"}
                                       value={form.email ?? refInputEmail.current?.value}
                                       type={"email"}
                                       placeHolder={"Digite seu e-mail"}
                                       onChange={onChangeEmail}
                                       validate={{
                                       required: {
                                           value: error.needFillEmail,
                                           message: "Por favor preencha o e-mail"
                                       },
                                       invalid: {
                                           value: error.invalidEmail,
                                           message: "E-mail inválido"
                                       }
                                   }}/>

                            <InputForm innerRef={refInputPassword}
                                       id={"inputPassword"}
                                       label={"Senha"}
                                       value={form.password ?? refInputPassword.current?.value}
                                       type={"password"}
                                       placeHolder={"Digite sua senha"}
                                       onChange={onChangePassword}
                                       validate={{
                                       required: {
                                           value: error.needFillPassword,
                                           message: "Por favor preencha a senha"
                                       }
                                   }}/>


                            {viewState instanceof Error && (viewState as Error).notAuthorized
                                && <div className="alert alert-danger" role="alert">
                                    E-mail e/ou senha estão inválidos
                                </div>
                            }

                            <button
                                type="button"
                                className="btn btn-primary "
                                onClick={onClickSubmit}
                            >

                                {viewState instanceof Loading &&
                                    <div className="spinner-border spinner-border-sm me-2" role="status"/>}
                                {viewState instanceof Loading ? "Carregando" : "Entrar"}

                            </button>

                            <button
                                type="button"
                                className="btn btn-text ms-2"
                                onClick={onClickForgotPassword}
                            >
                                Esqueci minha senha
                            </button>

                            {viewState instanceof Success
                                && <div className="alert alert-info mt-4" role="alert">
                                    {`Seja bem-vindo ${(viewState as Success).profile.name}`}
                                </div>
                            }
                        </fieldset>
                    </form>

                    <hr/>

                    <span className={"d-flex aligns-items-center"}>
                        Ainda não é um mebro?
                        <a href={"#"} className={"ms-2"}>Cadastre-se agora</a>
                    </span>
                </div>
            </div>
        </div>
    );
}
