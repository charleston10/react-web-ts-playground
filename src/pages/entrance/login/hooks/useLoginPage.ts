import {ChangeEvent, useRef, useState} from "react";
import {Form, Loading, ViewState} from "../ViewState";

export const useLoginPage = () => {
    const [viewState, setViewState] = useState<ViewState>(new Form())

    const refInputEmail = useRef<HTMLInputElement>(null)
    const refInputPassword = useRef<HTMLInputElement>(null)

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setViewState({
            ...viewState,
            email: e.target.value
        } as Form)
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setViewState({
            ...viewState,
            password: e.target.value
        } as Form)
    }

    const onSubmit = () => {
        setViewState(new Loading())

        setTimeout(() => {
            setViewState({
                email: "",
                password: ""
            } as Form)
        }, 5000)
    }

    return {
        viewState,
        onChangeEmail,
        onChangePassword,
        onSubmit,
        refInputEmail,
        refInputPassword
    }
}
