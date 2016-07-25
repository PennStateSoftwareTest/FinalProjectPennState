/**
 * Created by jnevins on 7/24/16.
 */
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../app.auth.service';
import { PolymerElement } from '@vaadin/angular2-polymer';
import {IUserModel, IVenue, IOwnership, ISuggestCriteria} from "../../common/interfaces";
import {Venue} from "../../common/venue";
import {Genre, Criteria} from "../../common/constants";

@Component({
    selector: 'account',
    templateUrl: 'app/dashboard/suggested_bookings/templates/suggested_bookings.component.html',
    styleUrls: ['app/dashboard/suggested_bookings/styles/suggested_bookings.component.css'],
    directives: [
    ]
})
export class SuggestedBookings implements OnInit {

    public venues : IVenue[];

    constructor(
        private authService : AuthService
    ) {}

    public ngOnInit() : void {

        let fakeVenue : IVenue =  new Venue(null, 'My Awesome Venue', '123 Street St.', 'Denver', 'CO', '80211');
        fakeVenue['bands'] = [
            {
                bandName: 'Awesome Band 1',
                bandManagerPhone: '720-123-4567'
            },
            {
                bandName: 'Awesome Band 2',
                bandManagerPhone: '303-987-6543'
            }
        ];


        this.venues = [
            fakeVenue
        ]
    }

}