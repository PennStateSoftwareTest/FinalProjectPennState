/**
 * Created by jnevins on 5/24/16.
 */
import { Component } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'login',
    templateUrl: 'app/login/templates/login.component.html',
    styleUrls: ['app/login/styles/login.component.css'],
    directives: [ROUTER_DIRECTIVES]

})
export class LoginComponent {

    constructor(private router : Router) {}

}