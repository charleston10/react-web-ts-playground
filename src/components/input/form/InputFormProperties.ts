import {ChangeEventHandler, HTMLInputTypeAttribute} from "react";
import {InputFormValidate} from "./InputFormValidate";

export type InputFormProperties = {
    innerRef?: any,
    id: string,
    label: string,
    value: string,
    type: HTMLInputTypeAttribute,
    placeHolder?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    validate?: InputFormValidate
}


