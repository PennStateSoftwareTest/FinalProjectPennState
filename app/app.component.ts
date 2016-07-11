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
import {Dashboard_BMComponent} from "./dashboard_bm/dashboard_bm.component";
import {CreateBand} from "./create_band/create_band.component";
import {Dashboard_ADMComponent} from "./dashboard_adm/dashboard_adm.component";
import {DashboardMenuComponent} from "./dashboard_menu/dashboard_menu.component";
import {AuthService} from './app.auth.service';

@Component({
    selector: 'our-awesome-app',
    templateUrl: 'app/templates/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        AuthService
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
    },{
        path: "/dashboard_menu",
        name:"DashboardMenu",
        component:DashboardMenuComponent
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
        path: '/dashboard_adm',
        name: 'DashboardADM',
        component: Dashboard_ADMComponent
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
    },
    {
        path: '/dashboard_bm',
        name: 'DashboardBM',
        component: Dashboard_BMComponent
    },
    {
        path: '/createband',
        name: 'CreateBand',
        component: CreateBand
    }

])
export class AppComponent {
    constructor() {}
}
