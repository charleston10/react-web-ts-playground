export abstract class ViewState {
}

export class Form extends ViewState {
    email: string = ""
    password: string = ""
}

export class Error extends ViewState {
    email: boolean = false;
    password: boolean = false;
}

export class Loading extends ViewState {
}
