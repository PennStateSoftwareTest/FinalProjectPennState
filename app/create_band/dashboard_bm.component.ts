
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'dashboard_bm',
    templateUrl: 'app/dashboard_bm/templates/bandmanagerdashboard.component.html'
})
export class Createband {

    constructor(private router : Router) {}

    /**
     * We're using the 'OnInit' lifecycle hook here.  Angular will
     * automatically run this when this component initializes.
     */
    public ngOnInit() : void {
        //TODO: check auth

        //Right now, we are just going to redirect to the login page
        this.router.navigate(['Login']);
    }
}
