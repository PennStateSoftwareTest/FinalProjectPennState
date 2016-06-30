/**
 * Created by jnevins on 5/24/16.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {NgForm} from '@angular/common';
import {NewVenueService} from "./newvenue.service";
import {AccountTypes} from "../common/constants";
import {Venue} from './venue';

@Component({
    selector: 'create_venue',
    templateUrl: 'app/create_venue/templates/create_venue.component.html',
    viewProviders: [
        NewVenueService
    ]
})
export class CreateVenue {


    constructor(
        private router : Router,
        private newVenueService : NewVenueService) {}

    public model : Venue = new Venue();
    /**
     * We're using the 'OnInit' lifecycle hook here.  Angular will
     * automatically run this when this component initializes.
     */
    // public ngOnInit() : void {
    //     //TODO: check auth
    //
    //     //Right now, we are just going to redirect to the login page
    //     this.router.navigate(['Login']);
    // }
    public createVenue() : void {
        this.newVenueService.createVenue(this.model)
            .subscribe(
                this.handleSuccessfullCreate.bind(this),
                this.handleFailedCreate
            );
    }

    private handleSuccessfullCreate(isSuccess : boolean) : void {
        //TODO: say 'thank you' for registering
        //route to login
        this.router.navigate(['DashboardVM']);
    }

    private handleFailedCreate(error : any) : void {
        //Tell the user something went wrong... probably server-side validation
        console.log(error);
    }

}
