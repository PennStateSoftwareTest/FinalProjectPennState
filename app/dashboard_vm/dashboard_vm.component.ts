/**
 * Created by jnevins on 5/24/16.
 */
import { Component, OnInit } from '@angular/core';
import {ExistingVenueService} from "../existing_venue/existing_venue.services";
import {JsonPipe} from "../existing_venue/custom_pipe.pipe";
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
@Component({
    selector: 'dashboard_vm',
    templateUrl: 'app/dashboard_vm/templates/dashboard.component.html',
    directives: [ROUTER_DIRECTIVES],
    viewProviders: [
          ExistingVenueService
      ],
    pipes: [
      JsonPipe
    ]
})
export class Dashboard_VMComponent {



    /**
     * We're using the 'OnInit' lifecycle hook here.  Angular will
     * automatically run this when this component initializes.
     */
    public ngOnInit() : void {
        //TODO: check auth

        //Right now, we are just going to redirect to the login page
        //this.router.navigate(['Login']);
        this.getVenues();
    }
    public venues:any;
    //public heros = ["Test", "Test2", "Test3"];
    constructor(
        private router : Router,
        private existingVenueService : ExistingVenueService) {}

    public getVenues() : void {
      console.log("In get venues");

      this.existingVenueService.getVenues()
            .subscribe(
                this.handleSuccessfullGet.bind(this),
                this.handleFailedCreate
              );
    }

    private handleSuccessfullGet(object:any) : void {
      //console.log(object[0]);
      this.venues = object;
      console.log(this.venues);
        //TODO: say 'thank you' for registering
        //route to login
        //this.router.navigate(['Login']);
    }

    private handleFailedCreate(error : any) : void {
        //Tell the user something went wrong... probably server-side validation
        console.log(error);
    }
}
