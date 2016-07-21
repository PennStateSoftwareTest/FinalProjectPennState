/**
 * Created by jnevins on 5/19/16.
 */
import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {NewUserComponent} from "./newuser/newuser.component";
import {ForgotPasswordComponent} from "./forgotpassword/forgotpassword.component";
import {AuthService} from './app.auth.service';
import {VenueService} from "./app.venue.service";

@Component({
    selector: 'our-awesome-app',
    templateUrl: 'app/templates/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        AuthService,
        VenueService
    ]
})
@RouteConfig([
    {
        path: '/dashboard/...',
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
    },
    {
        path: '/forgotpassword',
        name: 'ForgotPassword',
        component: ForgotPasswordComponent
    }
])
export class AppComponent {
    constructor() {}
}
