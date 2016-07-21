import { Component, OnInit } from '@angular/core';
import {ExistingVenueService} from "../existing_venue/existing_venue.services";
import {JsonPipe} from "../existing_venue/custom_pipe.pipe";
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import { PolymerElement } from '@vaadin/angular2-polymer';
import {Venue} from "../common/venue";
import {VenueService} from "../app.venue.service";
import {AuthService} from "../app.auth.service";

@Component({
    selector: 'dashboard_vm',
    templateUrl: 'app/dashboard_vm/templates/dashboard.component.html',
    styleUrls: ['app/dashboard_vm/styles/dashboard_vm.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        PolymerElement('paper-header-panel'),
        PolymerElement('paper-material')
    ],
    pipes: [
      JsonPipe
    ]
})
export class Dashboard_VMComponent implements OnInit {

    public venues : Venue[];

    constructor(
        private router : Router,
        private authService : AuthService,
        private venueService : VenueService
    ) {}

    public ngOnInit() : void {
        this.getVenues();
    }

    public getVenues() : void {

      this.venueService.getVenues(this.authService.activeUser._id)
            .subscribe(
                this.handleSuccessfullGet.bind(this),
                this.handleFailedGet
              );
    }

    private handleSuccessfullGet(venues : Venue[]) : void {
      this.venues = venues;
    }

    private handleFailedGet(error : any) : void {
        //Tell the user something went wrong... probably server-side validation
        console.log(error);
    }
}
