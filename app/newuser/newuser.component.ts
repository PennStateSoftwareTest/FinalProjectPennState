/**
 * Created by jnevins on 5/24/16.
 */
import { Component } from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {NgForm} from '@angular/common';
import {NewUserService} from "./newuser.service";
import {AccountTypes} from "../common/constants";
import {User} from './user';

@Component({
    selector: 'new-user',
    templateUrl: 'app/newuser/templates/newuser.component.html',
    styleUrls: ['app/newuser/styles/newuser.component.css'],
    viewProviders: [
        NewUserService
    ]
})
export class NewUserComponent {

    //TODO: add form validation

    public accountTypes : string[] = Object.keys(AccountTypes).map((key) => {
        return AccountTypes[key];
    });
    public model : User = new User();

    constructor(
        private router : Router,
        private newUserService : NewUserService) {}

    public createUser() : void {
        this.newUserService.createUser(this.model)
            .subscribe(
                this.handleSuccessfullCreate.bind(this),
                this.handleFailedCreate
            );
    }

    private handleSuccessfullCreate(isSuccess : boolean) : void {
        //TODO: say 'thank you' for registering
        //route to login
        this.router.navigate(['Login']);
    }

    private handleFailedCreate(error : any) : void {
        //Tell the user something went wrong... probably server-side validation
        console.log(error);
    }
}