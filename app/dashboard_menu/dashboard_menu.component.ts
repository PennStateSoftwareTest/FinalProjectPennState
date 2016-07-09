/**
 * Created by jnevins on 5/24/16.
 */
import { Component, OnInit, Input } from '@angular/core';
import {Router, OnActivate, CanActivate} from '@angular/router-deprecated';
import {AuthService} from '../app.auth.service';



@Component({
    selector: 'dashboard-menu',
    templateUrl: 'app/dashboard_menu/templates/dashboard_menu.component.html',
    styleUrls: ['app/dashboard_menu/styles/dashboard_menu.component.css'],
    directives: [
      ]
})
export class DashboardMenuComponent {
  @Input()
    page:any;

    constructor(
        private router : Router,
        private authService : AuthService
    ) {}


}
