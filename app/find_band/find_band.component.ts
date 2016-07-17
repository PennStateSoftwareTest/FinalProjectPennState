import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FindBandService} from "../find_band/find_band.services";
import {JsonPipe} from "../existing_venue/custom_pipe.pipe";
import {Genre} from "../common/constants";
import {Band} from './../common/band';
//import {Venue} from'./../common/venue';
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
      //this.getBands();
  }
  public bands:any;
  public genre_filters : string[] = ["", "", ""];
  public rate:number = Number.MAX_SAFE_INTEGER;

  public genre : string[] = Object.keys(Genre).map((key) => {
      return Genre[key];
  }).sort();
  public genre2 : string[] = Object.keys(Genre).map((key) => {
      return Genre[key];
  }).sort();
  public genre3 : string[] = Object.keys(Genre).map((key) => {
      return Genre[key];
  }).sort();
  public genre_arrays = [this.genre, this.genre2, this.genre3];
  //public model: Venue = new Venue();

  //venue is a string that relates to a selected string on the page find_band
  //position is the select number that has been changed starting at 0 base
  public selectGenre(venue:string, position:number):void{
    //Loop 3 times for each select
    for(var i = 0; i < 3; i++){
      //Don't want to modify the select that was just changed
      if(i != position){
        //If the previous value for the changed select is not empty string
        if(this.genre_filters[position] != ""){
          //Push element back on to the select at genre_array[i]
          this.genre_arrays[i].push(this.genre_filters[position]);
        }
        //If the select that just changed did not pass a value of empty string
        if(venue != ""){
          //Find the index of that string and remove it from the select at genre_array[i]
          var index = this.genre_arrays[i].indexOf(venue);
          this.genre_arrays[i].splice(index, 1);
        }
        //Sort the array of genres
        this.genre_arrays[i].sort();
      }
    }
    //Set the value of genre_filters[position] to the new value of the changed select
    this.genre_filters[position] = venue;
    //console.log(this.genre_filters);
    //Find our new bands
    this.findBands();
  }

  public changeRate(rate:number):void{
    this.rate = rate;
    this.findBands();
  }

  //public heros = ["Test", "Test2", "Test3"];
  constructor(
      private router : Router,
      private findBandService : FindBandService,
    private existingBandService : ExistingBandService) {}

  public findBands() : void {


    this.findBandService.findBands({"Genre":this.genre_filters, "Rate":this.rate})
        .subscribe(
            this.handleSuccessfullGet.bind(this),
            this.handleFailedCreate
        );

          //.subscribe(
    //         this.handleSuccessfullGet.bind(this),
    //          this.handleFailedCreate
    //        );
  }

  // private handleSuccessfullGet(object:any) : void {
  //   //console.log(object[0]);
  //   this.bands = object;
  //         //TODO: say 'thank you' for registering
  //     //route to login
  //     //this.router.navigate(['Login']);
  // }

  private handleFailedCreate(error : any) : void {
      //Tell the user something went wrong... probably server-side validation
      console.log(error);
  }

  // public bands:any;
  //public heros = ["Test", "Test2", "Test3"];
  // constructor(
  //     private router : Router,
  //     private existingBandService : ExistingBandService) {}

  public getBands() : void {


    this.existingBandService.getBands()
          .subscribe(
              this.handleSuccessfullGet.bind(this),
              this.handleFailedCreate
            );
  }



  private handleSuccessfullGet(object:any) : void {
    //console.log(object[0]);
    this.bands = object;
    //console.log(this.bands);
          //TODO: say 'thank you' for registering
      //route to login
      //this.router.navigate(['Login']);
  }

}
