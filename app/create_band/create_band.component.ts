/**
 * Created by jnevins on 5/24/16.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {NgForm} from '@angular/common';
import {NewBandService} from "./newband.service";
import {AccountTypes} from "../common/constants";
import {Band} from './band';

@Component({
    selector: 'create_band',
    templateUrl: 'app/create_band/templates/create_band.component.html',
    viewProviders: [
        NewBandService
    ]
})
export class CreateBand {


    constructor(
        private router : Router,
        private newBandService : NewBandService) {}

    public model : Band = new Band();
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
    public createBand() : void {
        this.newBandService.createBand(this.model)
            .subscribe(
                this.handleSuccessfullCreate.bind(this),
                this.handleFailedCreate
            );
    }

    private handleSuccessfullCreate(isSuccess : boolean) : void {
        //TODO: say 'thank you' for registering
        //route to login
        this.router.navigate(['DashboardBM']);
    }

    private handleFailedCreate(error : any) : void {
        //Tell the user something went wrong... probably server-side validation
        console.log(error);
    }

}
