import {ChangeEventHandler, HTMLInputTypeAttribute} from "react";

export type InputProperties = {
    innerRef?: any,
    id: string,
    value: string,
    type: HTMLInputTypeAttribute,
    placeHolder?: string,
    hasError?: boolean,
    onChange?: ChangeEventHandler<HTMLInputElement>,
}


