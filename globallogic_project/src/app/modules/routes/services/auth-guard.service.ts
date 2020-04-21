import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'

import UserAuthService from './user-auth.service'


@Injectable()

export default class AuthGuardService implements CanActivate {

    constructor(private userAuthService: UserAuthService) {

    }
    canActivate() {
        if (this.userAuthService.getAuthStatus()) {
            return true;
        } else {
            console.log('user is not authorized to access this page.')
        }
    }
}

