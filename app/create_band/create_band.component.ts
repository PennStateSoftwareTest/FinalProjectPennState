import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {NgForm} from '@angular/common';
import {BandService} from "../app.band.service";
import {Genre} from "../common/constants";
import {Band} from './../common/band';
import { PolymerElement } from '@vaadin/angular2-polymer';
import {AuthService} from "../app.auth.service";
import {IBand} from "../common/interfaces";

@Component({
    selector: 'create-band',
    templateUrl: 'app/create_band/templates/create_band.component.html',
    viewProviders: [
        BandService
      ],
      directives:[
        PolymerElement('paper-material'),
        PolymerElement('paper-input'),
        PolymerElement('paper-fab'),
        PolymerElement('paper-tooltip'),
        PolymerElement('paper-dropdown-menu'),
        PolymerElement('paper-item'),
        PolymerElement('paper-listbox'),
        PolymerElement('paper-input')
    ],
    inputs: ['bands']
})
export class CreateBand implements OnInit{


    constructor(
        private router : Router,
        private bandService : BandService,
        private AuthService : AuthService) {}

        public bands : Band[] = [];
        public model : IBand;
    /**
     * We're using the 'OnInit' lifecycle hook here.  Angular will
     * automatically run this when this component initializes.
     */
     public ngOnInit() : void {
        this.model = new Band(this.AuthService.activeUser._id);
        //console.log(this.model);
    }
    public createBand() : void {
        this.bandService.createBand(this.model)
            .subscribe(
                this.handleSuccessfullCreate.bind(this),
                this.handleFailedCreate
            );
    }
    // public Genre : string[] = Object.keys(Genre).map((key) => {
    //     return Genre[key];
    // });
    private handleSuccessfullCreate(band : Band) : void {
      //Add the new venue to the view
      this.bands.push(band);

      //Clear the form.
      this.model = new Band(this.AuthService.activeUser._id);
    }

    private handleFailedCreate(error : any) : void {
        //Tell the user something went wrong... probably server-side validation
        alert(`There was a problem creating your band.
            please make sure it is unique.  If you
            feel this is in error, please contact
            your account manager`);
    }

}
