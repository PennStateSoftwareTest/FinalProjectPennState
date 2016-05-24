/**
 * Created by jnevins on 5/24/16.
 */
import { Component } from '@angular/core';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'login',
    templateUrl: 'app/login/templates/login.component.html'
})
export class LoginComponent {

    constructor(private router : Router) {}

    public goToNewUser() : void {
        //Nav to the new user component
        this.router.navigate(['NewUser']);
    }
}