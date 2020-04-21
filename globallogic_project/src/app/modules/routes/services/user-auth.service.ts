import { Injectable } from '@angular/core';

@Injectable()
export default class UserAuthService {

    private usernam: string;
    private password: string;

    public getAuthStatus(): boolean {
        //API of login
        return false;
    }
}
