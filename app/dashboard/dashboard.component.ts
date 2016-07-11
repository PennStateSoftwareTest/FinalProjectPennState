/**
 * Created by jnevins on 5/24/16.
 */
import { Component, OnInit } from '@angular/core';
import {Router, OnActivate, CanActivate, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {AuthService} from '../app.auth.service';
import { PolymerElement } from '@vaadin/angular2-polymer';

const PAGES = [
  {"route":["Dashboard"], "name":"Dashboard Home"},
  {"route":["NewUser"], "name":"Book a Band"},
  {"route":["DashboardVM"], "name":"Venue Manager Tools"},
  {"route":["DashboardADM"], "name":"Admin Tools"},
  {"route":["DashboardBM"], "name":"Band Manager Tools"},
  {"route":["NewUser"], "name":"Account Settings"},
];

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/templates/dashboard.component.html',
    styleUrls: ['app/dashboard/styles/dashboard.component.css'],
    directives: [ PolymerElement('paper-menu'),
                  PolymerElement('paper-item'),
                  PolymerElement('paper-menu-button'),
                  PolymerElement('paper-icon-button'),
                  ROUTER_DIRECTIVES
      ]
})
export class DashboardComponent implements OnActivate {
  //public selectedPage : any;
  public pages = PAGES;
  public title : string = PAGES[0].name;
  first_auth= true;
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

    public onSelect(page:any) : void {
      this.title=page.name;
    }
}
