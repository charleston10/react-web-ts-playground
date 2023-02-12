import {Error} from './ViewState'

export class ErrorBuilder {
    error: Error

    constructor() {
        this.error = new Error()
    }

    setInvalidEmail(invalidEmail: boolean): this {
        this.error.invalidEmail = invalidEmail
        return this
    }

    setNeedFillEmail(needFillEmail: boolean): this {
        this.error.needFillEmail = needFillEmail
        return this
    }

    setNeedFillPassword(needFillPassword: boolean): this {
        this.error.needFillPassword = needFillPassword
        return this
    }

    build(): Error {
        return this.error
    }
}
