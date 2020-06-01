import { AuthService } from './../../Model/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()

export class AuthGuard {

    constructor(private route: Router, private auth: AuthService) {   
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (!this.auth.authenticated) {
            this.route.navigateByUrl('/admin/auth')
            return false;
        }
        return true;
    }
}
