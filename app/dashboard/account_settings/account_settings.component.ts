/**
 * Created by jnevins on 7/16/16.
 */
import { Component, OnInit } from '@angular/core';
import {RouteConfig, Router, OnActivate, CanActivate, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {AuthService} from '../../app.auth.service';
import { PolymerElement } from '@vaadin/angular2-polymer';
import {IUserModel} from "../../common/interfaces";
import {CreateVenue} from "../../create_venue/create_venue.component";
import {CreateBand} from "../../create_band/create_band.component";
import {Venue} from "../../common/venue";
import {Band} from "../../common/band";
import {BandService} from "../../app.band.service";
import {VenueService} from "../../app.venue.service";

@Component({
    selector: 'account',
    templateUrl: 'app/dashboard/account_settings/templates/account_settings.component.html',
    styleUrls: ['app/dashboard/account_settings/styles/account_settings.component.css'],
    directives: [
        CreateVenue,
        PolymerElement('paper-material'),
        PolymerElement('paper-item'),
        CreateBand
    ]
})
export class AccountSettings implements OnInit {

    public user : IUserModel = null;
    public venues : Venue[];
    public bands : Band[];

    constructor(
        private router : Router,
        private authService : AuthService,
        private venueService : VenueService,
        private bandService: BandService
    ) {}

    public ngOnInit() : void {
        this.user = this.authService.activeUser;

        this.venueService.getVenues(this.user._id).subscribe(
            ((venues : Venue[]) => {
                this.venues = venues
            }).bind(this)
        );

        this.bandService.getBands(this.user._id).subscribe(
            ((bands : Band[]) => {
                this.bands = bands
            }).bind(this)
        );
    }
}
