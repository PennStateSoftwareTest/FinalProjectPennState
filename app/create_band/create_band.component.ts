import { Component, OnInit, Input } from '@angular/core';
import {RouteConfig, Router, OnActivate, CanActivate, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {NgForm} from '@angular/common';
import {BandService} from "../app.band.service";
import {Genre} from "../common/constants";
import {Band} from './../common/band';
import { PolymerElement } from '@vaadin/angular2-polymer';
import {AuthService} from "../app.auth.service";
import {IBand} from "../common/interfaces";
import {JsonPipe} from "../existing_venue/custom_pipe.pipe";

@Component({
    selector: 'create-band',
    templateUrl: 'app/create_band/templates/create_band.component.html',
    styleUrls: ['app/create_venue/styles/create_venue.component.css'],
    viewProviders: [
        BandService
      ],
      directives:[
        PolymerElement('paper-material'),
        PolymerElement('paper-fab'),
        PolymerElement('paper-tooltip'),
        PolymerElement('paper-dropdown-menu'),
        PolymerElement('paper-input'),
        PolymerElement('paper-item'),
        PolymerElement('paper-listbox')
    ],
    inputs: ['bands'],
    pipes: [
      JsonPipe
    ]
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
      this.model.bandManagerName = this.AuthService.activeUser.firstName + " " + this.AuthService.activeUser.lastName;
      this.model.bandManagerPhone = this.AuthService.activeUser.phoneNumber;
      this.model.bandManagerEmail = this.AuthService.activeUser.email;
        this.bandService.createBand(this.model)
            .subscribe(
                this.handleSuccessfullCreate.bind(this),
                this.handleFailedCreate
            );
    }

    public Genre : string[] = Object.keys(Genre).map((key) => {
        return Genre[key];
    }).sort();

    public genreChange(value:string, position:number):void {
      if(position == 0){
        this.model.bandGenre1 = value;
      }else if(position == 1){
        this.model.bandGenre2 = value;
      }else if(position == 2){
        this.model.bandGenre3 = value;
      }

    }

    private handleSuccessfullCreate(band : Band) : void {
      //Add the new venue to the view
      this.bands.push(band);

      //Clear the form.
      this.model = new Band(this.AuthService.activeUser._id);
    }

    private handleFailedCreate(error : any) : void {
        //Tell the user something went wrong... probably server-side validation
        alert(`Not all required fields have been filled out properly. Try again.`);
    }

}
