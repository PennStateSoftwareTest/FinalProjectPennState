/**
 * Created by jnevins on 5/24/16.
 */
import { Component, OnInit } from '@angular/core';
import {Router, OnActivate, CanActivate} from '@angular/router-deprecated';
import {AuthService} from '../app.auth.service';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/templates/dashboard.component.html',
    styleUrls: ['app/dashboard/styles/dashboard.component.css'],
    directives: [ PolymerElement('paper-menu'),
                  PolymerElement('paper-item')
      ]
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
            this.authService.isSessionValid()
                .subscribe(
                    //No need for a success handler
                    null,
                    //Nav back to login on any other status code
                    () => {
                        this.router.navigate(['Login']);
                    }
                );
        }
    }

    public logout() : void {
        this.authService.logout();
        this.router.navigate(['Login']);
    }
}
