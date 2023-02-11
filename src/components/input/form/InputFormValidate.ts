export type InputFormValidate = {
    required?: {
        value: boolean,
        message?: string
    }
    invalid?: {
        value: boolean,
        message?: string
    }
}
