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

    constructor(private router: Router) {
   }

   authenticate( form: NgForm) {

        if( form.valid) {
            //valid form inputs. Perform the authentication
            this.router.navigateByUrl('/admin/main');
        }
        else {
            // incorrect authentication form inputs. set the error message
            this.errorMessage= 'incorrect authentication data!' ;
        }
   }
}