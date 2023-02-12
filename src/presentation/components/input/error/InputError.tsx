import {InputErrorProperties} from "./InputErrorProperties";
import React from "react";

export const InputError = (
    {
        innerRef, id, value, show
    }: InputErrorProperties
) => {
    if (show) {
        return (
            <span id={id} ref={innerRef} className={"text-danger animate__animated animate__fadeIn"}>
                {value}
            </span>
        )
    }

    return null
}
