import {Profile} from "../../../../common/model/Profile";

export abstract class ViewState {
}

export class Form extends ViewState {
    email: string = ""
    password: string = ""
}

export class Error extends ViewState {
    invalidEmail: boolean = false;
    needFillEmail: boolean = false;
    needFillPassword: boolean = false;
    notAuthorized: boolean = false;
}

export class Loading extends ViewState {
}

export class Success extends ViewState {
    profile: Profile

    constructor(profile: Profile) {
        super();
        this.profile = profile
    }
}

