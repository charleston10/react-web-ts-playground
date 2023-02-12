import {InputProperties} from "./InputProperties";
import React from "react";

export const Input = (
    {innerRef, id, type, placeHolder, value, onChange, hasError}: InputProperties
) => {
    return (
        <input
            id={id}
            ref={innerRef}
            type={type}
            value={value}
            onChange={onChange}
            className={hasError ? "form-control is-invalid" : "form-control"}
            placeholder={placeHolder}
        />
    )
}
