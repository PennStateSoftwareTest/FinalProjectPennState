/**
 * Created by jnevins on 5/24/16.
 */
import { Component, OnInit } from '@angular/core';
import {Router, OnActivate, CanActivate, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {AuthService} from '../app.auth.service';
import { PolymerElement } from '@vaadin/angular2-polymer';

const PAGES = [
  {"route":["NewUser"], "name":"Book a Band"},
  {"route":["DashboardVM"], "name":"Venue Manager Tools"},
  {"route":["DashboardADM"], "name":"Admin Tools"},
  {"route":["DashboardBM"], "name":"Band Manager Tools"},
  {"route":["NewUser"], "name":"Account Settings"},
  {"route":["NewUser"], "name":"Logout"}
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

                //  PolymerElement("maps-icons")
                  //PolymerElement('core-elements')
      ],
      providers:[ROUTER_PROVIDERS]
})
export class DashboardComponent implements OnActivate {
  selectedPage : any;
  pages = PAGES;
  title = "Rockstar Login";
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
            this.router.navigate(['Login']);
        }
    }

    public isAuth():boolean{
      var return_val = false;
      if(this.authService.isAuthenticated){
        return_val = true;
        if(this.first_auth){
          this.selectedPage = this.pages[0];
          this.title = this.selectedPage.name;
          this.first_auth = false;
        }

      }
      return (return_val);
    }

    onSelect(page:any){
      //this.selectedPage = page;
      //console.log(this.selectedPage);
      this.title=page.name;
    }
}
