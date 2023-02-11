import {MouseEventHandler} from "react";

export type ButtonProps = {
    innerRef?: any,
    id: string
    type: 'button' | 'text' | 'outline'
    text: string
    style: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
    onClick?: MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean
    loading?: {
        value: boolean
        text: string
    }
}
