import {ChangeEvent, useRef, useState} from "react";
import {Profile} from "../../../../model/Profile";
import {
    Form,
    Loading,
    ViewState,
    Success,
    ErrorBuilder
} from "../view_state";
import {Error} from "../view_state/ViewState";

export const useLoginPage = () => {
    const [viewState, setViewState] = useState<ViewState>(new Form())

    const refInputEmail = useRef<HTMLInputElement>(null)
    const refInputPassword = useRef<HTMLInputElement>(null)

    const hasError = viewState instanceof Error
    const form = (viewState as Form)
    const error = (viewState as Error)

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

    const onClickSubmit = async () => {
        if (isValidNeedFill()) return;
        if (hasInvalidField()) return;

        setViewState(new Loading())

        try {
            let profile: Profile = await requestLogin()
            setViewState(new Success(profile))
        } catch (e) {
            setViewState(e as Error)
        }
    }

    const onClickForgotPassword = () => {
    }

    const isEmailValid = (email?: string): boolean => {
        return (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email ?? ""))
    }

    const isValidNeedFill = (): boolean => {
        let emailNeedFill = refInputEmail.current?.value === ""
        let passwordNeedFill = refInputPassword.current?.value === ""

        if (emailNeedFill || passwordNeedFill) {
            setViewState(
                new ErrorBuilder()
                    .setNeedFillEmail(emailNeedFill)
                    .setNeedFillPassword(passwordNeedFill)
                    .build()
            )
            return true
        }

        return false
    }

    const hasInvalidField = (): boolean => {
        let emailInvalid = isEmailValid(refInputEmail.current?.value)

        if (emailInvalid) {
            setViewState(
                new ErrorBuilder()
                    .setInvalidEmail(emailInvalid)
                    .build()
            )
            return true
        }

        return false
    }

    const requestLogin = async (): Promise<Profile> => {
        await timeout(1000)

        return {
            name: "Mae Tonha",
            age: 29
        }
    }

    function timeout(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return {
        viewState,
        onChangeEmail,
        onChangePassword,
        onClickSubmit,
        onClickForgotPassword,
        refInputEmail,
        refInputPassword,
        hasError,
        error,
        form
    }
}
