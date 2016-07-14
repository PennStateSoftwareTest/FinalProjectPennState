
import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FindBandService} from "../find_band/find_band.services";
import {JsonPipe} from "../existing_venue/custom_pipe.pipe";
import {Genre} from "../common/constants";
import {Band} from './../common/band';
import {Venue} from'./../common/venue';
import {ExistingBandService} from "../existing_band/existing_band.services";

@Component({
    selector: 'find_band',
    templateUrl: 'app/find_band/templates/find_band.component.html',
    directives: [ROUTER_DIRECTIVES],
    viewProviders: [
          FindBandService,
          ExistingBandService
      ],
    pipes: [
      JsonPipe
    ]
})
export class FindBand_Component {

  public ngOnInit() : void {
      //TODO: check auth

      //Right now, we are just going to redirect to the login page
      //this.router.navigate(['Login']);
      this.findBands();
  }
  public bands:any;

  public genre : string[] = Object.keys(Genre).map((key) => {
      return Genre[key];
  });

  public model: Venue = new Venue();

  //public heros = ["Test", "Test2", "Test3"];
  constructor(
      private router : Router,
      private findBandService : FindBandService) {}

  public findBands() : void {


    this.findBandService.findBands()
          //.subscribe(
    //          this.handleSuccessfullGet.bind(this),
    //          this.handleFailedCreate
    //        );
  }

  private handleSuccessfullGet(object:any) : void {
    //console.log(object[0]);
    this.bands = object;
          //TODO: say 'thank you' for registering
      //route to login
      //this.router.navigate(['Login']);
  }

  private handleFailedCreate(error : any) : void {
      //Tell the user something went wrong... probably server-side validation
      console.log(error);
  }

}
