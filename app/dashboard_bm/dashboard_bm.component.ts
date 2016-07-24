
import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
//import {ExistingBandService} from "../existing_band/existing_band.services";

import { PolymerElement } from '@vaadin/angular2-polymer';
import {Band} from "../common/band";
import {BandService} from "../app.band.service";
import {JsonPipe} from "../existing_venue/custom_pipe.pipe";
import {IUserModel, IVenue, IOwnership, ISuggestCriteria} from "../common/interfaces";
import {Genre, Criteria} from "../common/constants";
import {AuthService} from '../app.auth.service';
import {CreateBand} from "../create_band/create_band.component";

@Component({
    selector: 'dashboard_bm',
    templateUrl: 'app/dashboard_bm/templates/bandmanagerdashboard.component.html',
    styleUrls: ['app/dashboard/account_settings/styles/account_settings.component.css'],
    directives: [ROUTER_DIRECTIVES,
      CreateBand,
      PolymerElement('paper-material')
    ],
    viewProviders: [
          //ExistingBandService
      ],
    pipes: [
      JsonPipe
    ]
})
export class Dashboard_BMComponent {

  public ngOnInit() : void {
      //TODO: check auth

      //Right now, we are just going to redirect to the login page
      //this.router.navigate(['Login']);

      this.user = this.authService.activeUser;
      this.bandService.getBands(this.user._id).subscribe(
          ((bands : Band[]) => {
              this.bands = bands
          }).bind(this)
      );
  }
  //public bands:any;
  public user : IUserModel;
  public bands : Band[];
  public availableGenre : string[];

  constructor(
      private router : Router,
      private bandService: BandService,
      private authService : AuthService
      //private existingBandService : ExistingBandService
    ) {}

    private initializeGenre() : void {
        //Would be nice if TypeScript supported object.values...
        this.availableGenre = Object.keys(Genre).map((key) => {
            return Genre[key];
        });
    }



}
