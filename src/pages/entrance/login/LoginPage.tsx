import './Login.scss';

import React from "react";
import {Error, Form, Loading, Success,} from "./ViewState";
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
                        <fieldset  disabled={viewState instanceof Loading}>
                            <div className={"mb-3"}>
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                                    E-mail
                                </label>

                                <input
                                    id={"inputEmail"}
                                    className="form-control"
                                    ref={refInputEmail}
                                    type={"email"}
                                    value={(viewState as Form)?.email ?? refInputEmail.current!.value}
                                    onChange={onChangeEmail}
                                />

                                {viewState instanceof Error
                                    && (viewState as Error).invalidEmail
                                    && <p>E-mail inválido</p>
                                }

                                {viewState instanceof Error
                                    && (viewState as Error).needFillEmail
                                    && <p>Por favor preencha o campo e-mail</p>
                                }
                            </div>

                            <div className={"mb-3"}>
                                <label htmlFor="inputPassword" className="form-label">
                                    Password
                                </label>

                                <input
                                    id={"inputPassword"}
                                    className="form-control"
                                    ref={refInputPassword}
                                    type={"password"}
                                    value={(viewState as Form)?.password ?? refInputPassword.current!.value}
                                    onChange={onChangePassword}
                                />

                                {viewState instanceof Error && (viewState as Error).needFillPassword
                                    && <p>Por favor preencha o campo senha</p>
                                }
                            </div>

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
