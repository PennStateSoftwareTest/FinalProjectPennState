import { Component, OnInit } from '@angular/core';
import {RouteConfig, Router, OnActivate, CanActivate, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {AuthService} from '../app.auth.service';
import { PolymerElement } from '@vaadin/angular2-polymer';
//TODO: these need to be moved into folder under the dashbaord unless they are to become reusable components
import {Dashboard_VMComponent} from "../dashboard_vm/dashboard_vm.component";
import {CreateVenue} from "../create_venue/create_venue.component";
import {ExistingVenue} from "../existing_venue/existing_venue.component";
import {Dashboard_BMComponent} from "../dashboard_bm/dashboard_bm.component";
import {CreateBand} from "../create_band/create_band.component";
import {Dashboard_ADMComponent} from "../dashboard_adm/dashboard_adm.component";
import {PAGES} from "../common/constants";
import {FindBand_Component} from "../find_band/find_band.component";
import {AccountSettings} from "./account_settings/account_settings.component";
import {SuggestedBookings} from "./suggested_bookings/suggested_bookings.component";

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/templates/dashboard.component.html',
    styleUrls: ['app/dashboard/styles/dashboard.component.css'],
    directives: [ PolymerElement('paper-menu'),
                  PolymerElement('paper-item'),
                  PolymerElement('paper-toolbar'),
                  PolymerElement('paper-drawer-panel'),
                  PolymerElement('paper-menu-button'),
                  PolymerElement('paper-icon-button'),
                  ROUTER_DIRECTIVES
      ]
})
@RouteConfig([
    {
        path: '/suggestions',
        name: 'Suggestions',
        component: SuggestedBookings,
        useAsDefault: true
    },
    {
        path: '/findband',
        name: 'FindBand',
        component: FindBand_Component,
    },
    {
        path: '/dashboard_adm',
        name: 'DashboardADM',
        component: Dashboard_ADMComponent
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
    },
    {
        path: '/account-settings',
        name: 'AccountSettings',
        component: AccountSettings
    }
])
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
