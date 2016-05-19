/**
 * Created by jnevins on 5/19/16.
 */
import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

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

])
export class AppComponent {
    constructor() {}
}