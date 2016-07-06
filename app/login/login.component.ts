/**
 * Created by jnevins on 5/24/16.
 */
import { Component } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {NgForm} from '@angular/common';
import {AuthService} from '../app.auth.service';

@Component({
    selector: 'login',
    templateUrl: 'app/login/templates/login.component.html',
    styleUrls: ['app/login/styles/login.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {

    public email : string;
    public password : string;

    constructor(
        private router : Router,
        private authService : AuthService
    ) {}

    public login() : void {
        this.authService.login(this.email, this.password)
            .subscribe(
                this.goToDashboard.bind(this),
                this.handleFailedLogin
            );
    }

    private goToDashboard(...args : any[]) : void {
        this.router.navigate(['Dashboard']);
    }

    private handleFailedLogin() : void {
        //TODO: This works for now, but we need a nicer error message built into the page
        alert("We're sorry, but the login information you supplied was incorrect.");
    }
}