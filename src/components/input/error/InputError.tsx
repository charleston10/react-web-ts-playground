import {InputErrorProperties} from "./InputErrorProperties";
import React from "react";

export const InputError = (
    {
        innerRef, id, value, show
    }: InputErrorProperties
) => {
    if (show) {
        return (
            <span id={id} ref={innerRef} className={"text-danger"}>
                {value}
            </span>
        )
    }

    return null
}
