/**
 * Created by jnevins on 5/19/16.
 */
import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {NewUserComponent} from "./newuser/newuser.component";
import {ForgotPasswordComponent} from "./forgotpassword/forgotpassword.component";
import {Dashboard_VMComponent} from "./dashboard_vm/dashboard_vm.component";
import {CreateVenue} from "./create_venue/create_venue.component";
import {ExistingVenue} from "./existing_venue/existing_venue.component";

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
    },
    {
        path: '/forgotpassword',
        name: 'ForgotPassword',
        component: ForgotPasswordComponent
    },
    {
        path: '/dashboard_vm',
        name: 'DashboardVM',
        component: Dashboard_VMComponent
    },
    {
        path: '/createvenue',
        name: 'CreateVenue',
        component: CreateVenue
    },
    {
        path: '/existing_venue',
        name: 'ExistingVenue',
        component: ExistingVenue
    }
])
export class AppComponent {
    constructor() {}
}
