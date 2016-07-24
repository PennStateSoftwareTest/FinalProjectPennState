import { PolymerElement } from '@vaadin/angular2-polymer';
import { Component } from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {NgForm} from '@angular/common';
import {NewUserService} from "./newuser.service";
import {AccountTypes} from "../common/constants";
import {User} from './../common/user';

@Component({
    selector: 'new-user',
    templateUrl: 'app/newuser/templates/newuser.component.html',
    styleUrls: ['app/login/styles/login.component.css'],
    viewProviders: [
        NewUserService
    ],
    directives:[
      PolymerElement('paper-material'),
      PolymerElement('paper-fab'),
      PolymerElement('paper-tooltip'),
      PolymerElement('paper-dropdown-menu'),
      PolymerElement('paper-input'),
      PolymerElement('paper-item'),
      PolymerElement('paper-listbox')
  ]
})
export class NewUserComponent {

    public accountTypes : string[] = Object.keys(AccountTypes).map((key) => {
        return AccountTypes[key];
    });

    public typeChange(value:string):void {

        this.model.accountType = value;

      }


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
