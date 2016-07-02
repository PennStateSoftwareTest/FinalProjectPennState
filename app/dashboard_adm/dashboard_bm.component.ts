
import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {ExistingBandService} from "../existing_band/existing_band.services";
import {JsonPipe} from "../existing_venue/custom_pipe.pipe";

@Component({
    selector: 'dashboard_adm',
    templateUrl: 'app/dashboard_adm/templates/admindashboard.component.html',
    directives: [ROUTER_DIRECTIVES],
    viewProviders: [
          ExistingBandService
      ],
    pipes: [
      JsonPipe
    ]
})
export class Dashboard_ADMComponent {

  public ngOnInit() : void {
      //TODO: check auth

      //Right now, we are just going to redirect to the login page
      //this.router.navigate(['Login']);
      this.getBands();
  }
  public bands:any;
  //public heros = ["Test", "Test2", "Test3"];
  constructor(
      private router : Router,
      private existingBandService : ExistingBandService) {}

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
          //TODO: say 'thank you' for registering
      //route to login
      //this.router.navigate(['Login']);
  }

  private handleFailedCreate(error : any) : void {
      //Tell the user something went wrong... probably server-side validation
      console.log(error);
  }
}
