
import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {ExistingBandService} from "../existing_band/existing_band.services";
import {JsonPipe} from "../existing_venue/custom_pipe.pipe";
import {Dashboard_ADMService} from "./dashboard_adm.services";


@Component({
    selector: 'dashboard_adm',
    templateUrl: 'app/dashboard_adm/templates/admindashboard.component.html',
    directives: [ROUTER_DIRECTIVES],
    viewProviders: [
          ExistingBandService,
          Dashboard_ADMService
      ],
    pipes: [
      JsonPipe
    ]
})
export class Dashboard_ADMComponent {
  public createManyBands() : void{
    var element=<HTMLInputElement>document.getElementById("urlToBandCSV");
    var filename=element.value;
      this.dashboard_ADMService.uploadCSV([filename])
        .subscribe(
            this.handleSuccessfullCreate.bind(this),
            this.handleFailedCreate
        );
}


  public ngOnInit() : void {
      //TODO: check auth

      //Right now, we are just going to redirect to the login page
      //this.router.navigate(['Login']);
      this.getBands();
  }
  public bands:any;
  public csv_input:string;
  //public heros = ["Test", "Test2", "Test3"];
  constructor(
      private router : Router,
      private existingBandService : ExistingBandService,
      private dashboard_ADMService:Dashboard_ADMService
      ) {}

  public getBands() : void {


    this.existingBandService.getBands()
          .subscribe(
              this.handleSuccessfullGet.bind(this),
              this.handleFailedCreate
            );
  }

  // public delete():void{
  //   this.dashboard_ADMService.deleteUser()
  //     .subscribe();
  // }

  private handleSuccessfullGet(object:any) : void {
    //console.log(object[0]);
    this.bands = object;
          //TODO: say 'thank you' for registering
      //route to login
      //this.router.navigate(['Login']);
  }
  private handleSuccessfullCreate(object:any) : void {
    //console.log(object[0]);

          //TODO: say 'thank you' for registering
      //route to login
      //this.router.navigate(['Login']);
  }

  private handleFailedCreate(error : any) : void {
      //Tell the user something went wrong... probably server-side validation
      console.log(error);
  }
}
