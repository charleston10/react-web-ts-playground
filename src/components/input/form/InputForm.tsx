import React, {ChangeEvent, useRef} from "react";
import {InputError} from "../error/InputError";
import {InputFormProperties} from "./InputFormProperties";
import {Input} from "../element/Input";

export const InputForm = (
    {
        innerRef, id, label, value, type, placeHolder, onChange, validate
    }: InputFormProperties
) => {
    const refValiateRequired = useRef<HTMLElement>(null)
    const refValidateInvalid = useRef<HTMLElement>(null)
    const hasError = validate?.required?.value || validate?.invalid?.value

    return (
        <div className={"mb-3"}>
            <label htmlFor={id} className="col-sm-2 col-form-label">
                {label}
            </label>

            <Input
                innerRef={innerRef}
                id={id}
                type={type}
                value={value}
                placeHolder={placeHolder}
                hasError={hasError}
                onChange={onChange}
            />

            <InputError
                innerRef={refValiateRequired}
                id={"errorRequired"}
                value={validate?.required?.message}
                show={validate?.required?.value ?? false}/>

            <InputError
                innerRef={refValidateInvalid}
                id={"errorInvalid"}
                value={validate?.invalid?.message}
                show={validate?.invalid?.value ?? false}/>
        </div>
    )
}
