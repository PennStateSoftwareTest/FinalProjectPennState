/**
 * Created by jnevins on 7/16/16.
 */
import { Component, OnInit } from '@angular/core';
import {RouteConfig, Router, OnActivate, CanActivate, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {AuthService} from '../../app.auth.service';
import { PolymerElement } from '@vaadin/angular2-polymer';
import {IUserModel} from "../../common/interfaces";

@Component({
    selector: 'account',
    templateUrl: 'app/dashboard/account_settings/templates/account_settings.component.html',
    styleUrls: ['app/dashboard/account_settings/styles/account_settings.component.css'],
    directives: [
        PolymerElement('paper-toolbar'),
        PolymerElement('paper-material'),
        PolymerElement('paper-drawer-panel'),
        PolymerElement('paper-header-panel'),
    ]
})
export class AccountSettings implements OnInit {

    public user : IUserModel = null;

    constructor(
        private router : Router,
        private authService : AuthService
    ) {}

    public ngOnInit() : void {
        this.user = this.authService.activeUser;
    }
}