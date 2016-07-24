/**
 * Created by jnevins on 7/16/16.
 */
import { Component, OnInit } from '@angular/core';
import {RouteConfig, Router, OnActivate, CanActivate, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {AuthService} from '../../app.auth.service';
import { PolymerElement } from '@vaadin/angular2-polymer';
import {IUserModel, IVenue, IOwnership, ISuggestCriteria} from "../../common/interfaces";
import {CreateVenue} from "../../create_venue/create_venue.component";
import {Venue} from "../../common/venue";
import {VenueService} from "../../app.venue.service";
import {Genre, Criteria} from "../../common/constants";

@Component({
    selector: 'account',
    templateUrl: 'app/dashboard/account_settings/templates/account_settings.component.html',
    styleUrls: ['app/dashboard/account_settings/styles/account_settings.component.css'],
    directives: [
        CreateVenue,
        PolymerElement('paper-material'),
        PolymerElement('paper-item'),
        PolymerElement('paper-dropdown-menu'),
        PolymerElement('paper-menu'),
        PolymerElement('paper-listbox')
    ]
})
export class AccountSettings implements OnInit {

    public user : IUserModel;
    public venues : IVenue[];
    public availableGenre : string[];

    constructor(
        private router : Router,
        private authService : AuthService,
        private venueService : VenueService

    ) {}

    public ngOnInit() : void {
        this.initializeGenre();
        this.user = this.authService.activeUser;
        this.venueService.getVenues(this.user._id).subscribe(
            ((venues : IVenue[]) => {
                this.venues = venues
            }).bind(this)
        );


    }

    public setVenueGenreCriteria(
        venue : IVenue,
        genre : string
    ) : void {
        //There shoule only be one... if this is kept, it should be written better.
        let myOwnership : IOwnership = venue.getOwnership(this.user._id)[0];

        if (myOwnership.hasCriteria(Criteria.GENRE)) {
            myOwnership.updateCriteria(Criteria.GENRE, genre);
        } else {
            myOwnership.addCriteria(Criteria.GENRE, genre);
        }

        this.updateCriteria(venue._id, myOwnership);
    }

    private initializeGenre() : void {
        //Would be nice if TypeScript supported object.values...
        this.availableGenre = Object.keys(Genre).map((key) => {
            return Genre[key];
        });
    }

    private updateCriteria(venueId : string, ownership : IOwnership) : void {
        //PUT the updated criteria
        console.log(venueId, ownership);
    }
}
