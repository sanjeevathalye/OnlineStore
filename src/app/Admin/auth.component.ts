import { AuthService } from './../../Model/auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './auth.component.html'
})

export class AuthComponent {
    public username: string ;
    public password: string ;
    public errorMessage: string ;

    constructor(private router: Router, private auth: AuthService) {
   }

   authenticate( form: NgForm) {

        if( form.valid) {
            //valid form inputs. Perform the authentication
            /* temporarily comment this part 
            this.auth.authenticate(this.username, this.password).
            subscribe( response => {
                if(response) {
                    this.router.navigateByUrl('/admin/main');
                }
                else {
                    this.errorMessage = 'Authentication failed!';
                }
            })
            */
           this.router.navigateByUrl('/admin/main');
        }
        else {
            // incorrect authentication form inputs. set the error message
            this.errorMessage= 'incorrect authentication data!' ;
        }
   }
}