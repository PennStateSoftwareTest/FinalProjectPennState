/**
 * Created by jnevins on 5/24/16.
 */
import { Component, OnInit } from '@angular/core';
import {Router, OnActivate, CanActivate} from '@angular/router-deprecated';
import {AuthService} from '../app.auth.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/templates/dashboard.component.html',
    styleUrls: ['app/dashboard/styles/dashboard.component.css']
})
export class DashboardComponent implements OnActivate {

    constructor(
        private router : Router,
        private authService : AuthService
    ) {}

    /**
     * The routerOnActivate hook will allow us to
     */
    public routerOnActivate() : void {
        if (!this.authService.isAuthenticated) {
            this.router.navigate(['Login']);
        }
    }
}