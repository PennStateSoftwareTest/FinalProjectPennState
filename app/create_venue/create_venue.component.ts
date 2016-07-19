/**
 * Created by jnevins on 5/24/16.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {NgForm} from '@angular/common';
import {VenueService} from "../app.venue.service";
import {AccountTypes} from "../common/constants";
import {Venue} from './../common/venue';
import { PolymerElement } from '@vaadin/angular2-polymer';


@Component({
    selector: 'create-venue',
    templateUrl: 'app/create_venue/templates/create_venue.component.html',
    styleUrls: ['app/create_venue/styles/create_venue.component.css'],
    directives: [
        PolymerElement('paper-material'),
        PolymerElement('paper-input'),
        PolymerElement('paper-fab'),
        PolymerElement('paper-tooltip')
    ]
})
export class CreateVenue implements OnInit{

    public model : Venue;

    constructor(
        private router : Router,
        private VenueService : VenueService
    ) {}

    /**
     * We're using the 'OnInit' lifecycle hook here.  Angular will
     * automatically run this when this component initializes.
     */
     public ngOnInit() : void {
        this.model = new Venue();
    }
    public createVenue() : void {
        this.VenueService.createVenue(this.model)
            .subscribe(
                this.handleSuccessfullCreate.bind(this),
                this.handleFailedCreate
            );
    }

    private handleSuccessfullCreate(isSuccess : boolean) : void {
        //TODO: fire an event

        //Clear the form.
        this.model = new Venue();
    }

    private handleFailedCreate(error : any) : void {
        //Tell the user something went wrong...
        //TODO: make this a toast
        alert(`There was a problem creating your venue.
            please make sure it is unique.  If you
            feel this is in error, please contact
            your account manager`);
    }

}
