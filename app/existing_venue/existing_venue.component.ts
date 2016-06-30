/**
 * Created by jnevins on 5/24/16.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {ExistingVenueService} from "./existing_venue.services";
import {AccountTypes} from "../common/constants";
import {Venue} from './venue';
import {JsonPipe} from "./custom_pipe.pipe";

@Component({
    selector: 'existing_venue',
    templateUrl: 'app/existing_venue/templates/existing_venue.component.html',
    viewProviders: [
        ExistingVenueService
    ],
    pipes: [
      JsonPipe
    ]
})
export class ExistingVenue {


    /**
     * We're using the 'OnInit' lifecycle hook here.  Angular will
     * automatically run this when this component initializes.
     */
    public ngOnInit() : void {
        //TODO: check auth
        this.getVenues();
        //Right now, we are just going to redirect to the login page
        //this.router.navigate(['Login']);
    }
    public model : Venue = new Venue();
    public venues:any;
    public heros = ["Test", "Test2", "Test3"];
    constructor(
        private router : Router,
        private existingVenueService : ExistingVenueService) {}

    public getVenues() : void {
      console.log("In get venues");

      this.venues = this.existingVenueService.getVenues()
            .subscribe(
                this.handleSuccessfullGet.bind(this),
                this.handleFailedCreate
              );
    }

    private handleSuccessfullGet(object:any) : void {
      //console.log(object[0]);
      this.venues = object;
      console.log(this.venues);
      //console.log(this.venues);
        //TODO: say 'thank you' for registering
        //route to login
        //this.router.navigate(['Login']);
    }

    private handleFailedCreate(error : any) : void {
        //Tell the user something went wrong... probably server-side validation
        console.log(error);
    }


}
