/**
 * Created by jnevins on 7/24/16.
 */
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../app.auth.service';
import { PolymerElement } from '@vaadin/angular2-polymer';
import {IUserModel, IVenue, IOwnership, ISuggestCriteria} from "../../common/interfaces";
import {Venue} from "../../common/venue";
import {Genre, Criteria} from "../../common/constants";
import {SuggestedBookingService} from "./suggested_bookings.service";
import {IVenueSuggestion} from "../../common/interfaces";

@Component({
    selector: 'account',
    templateUrl: 'app/dashboard/suggested_bookings/templates/suggested_bookings.component.html',
    styleUrls: ['app/dashboard/suggested_bookings/styles/suggested_bookings.component.css'],
    directives: [
        PolymerElement('paper-material')
    ],
    viewProviders: [
        SuggestedBookingService
    ]
})
export class SuggestedBookings implements OnInit {

    public venues : IVenueSuggestion[];

    constructor(
        private authService : AuthService,
        private suggestedBookingService : SuggestedBookingService
    ) {}

    public ngOnInit() : void {
        this.suggestedBookingService.getSuggestions(this.authService.activeUser._id).subscribe(
            ((venues : IVenueSuggestion[]) => {
                this.venues = venues;
            }).bind(this)
        );
    }
}