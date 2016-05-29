/**
 * Created by jnevins on 5/19/16.
 */
import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {NewUserComponent} from "./newuser/newuser.component";


//TODO: add routes and auth service

@Component({
    selector: 'our-awesome-app',
    templateUrl: 'app/templates/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    },
    {
        path: '/newuser',
        name: 'NewUser',
        component: NewUserComponent
    }
])
export class AppComponent {
    constructor() {}
}