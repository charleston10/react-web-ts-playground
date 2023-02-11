import {ChangeEvent, useRef, useState} from "react";
import {Form, Loading, Error, ViewState, Success} from "../ViewState";
import {Profile} from "../../../../model/Profile";

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

    const onClickSubmit = async () => {
        if (isValidNeedFill() || hasInvalidField()) {
            return;
        }

        setViewState(new Loading())

        try {
            let profile: Profile = await requestLogin()
            setViewState(new Success(profile))
        } catch (e) {
            console.error(e)
            setViewState(e as Error)
        }
    }

    const onClickForgotPassword = () => {
    }

    const isEmailValid = (email: string): boolean => {
        return (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    }

    const isValidNeedFill = (): boolean => {
        let emailNeedFill = refInputEmail.current!.value === ""
        let passwordNeedFill = refInputPassword.current!.value === ""

        if (emailNeedFill || passwordNeedFill) {
            let error = new Error()
            error.needFillEmail = emailNeedFill
            error.needFillPassword = passwordNeedFill
            setViewState(error)
            return true
        }

        return false
    }

    const hasInvalidField = (): boolean => {
        let emailInvalid = isEmailValid(refInputEmail.current!.value)

        if (emailInvalid) {
            let error = new Error()
            error.invalidEmail = emailInvalid
            setViewState(error)
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
        refInputPassword
    }
}
