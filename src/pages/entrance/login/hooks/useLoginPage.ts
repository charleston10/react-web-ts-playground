import React, {useState} from "react";
import {Form, Loading, ViewState} from "../ViewState";

export const useLoginPage = () => {
    const [viewState, setViewState] = useState<ViewState>(new Form())

    const inputEmail = React.createRef<HTMLInputElement>();
    const inputPassword = React.createRef<HTMLInputElement>();

    const onChangeEmail = (e: any) => {
        if (e.target?.value) {
            let state = (viewState as Form)
            state.email = e.target.value
            setViewState(state)
        }
    }

    const onChangePassword = (e: any) => {
        if (e.target?.value) {
            let state = (viewState as Form)
            state.password = e.target.value
            setViewState(state)
        }
    }

    const onSubmit = () => {
        setViewState(new Loading())

        console.log(viewState instanceof Loading)
    }

    return {
        viewState,
        inputEmail,
        inputPassword,
        onChangeEmail,
        onChangePassword,
        onSubmit
    }
}
