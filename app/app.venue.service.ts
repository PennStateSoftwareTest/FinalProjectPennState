/**
 * Created by jnevins on 7/19/16.
 */
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {User} from "./common/user";
import {Observer} from "rxjs/Observer";
import {IUserModel, IAuthResponse} from "./common/interfaces"
import {Venue} from './common/venue';
import {AuthService} from "./app.auth.service";


@Injectable()
export class VenueService {

    //TODO: needs to be dynamic
    private userVenueEndpoint = 'api/user/:userId/venue';

    constructor(
        private http : Http,
        private AuthService : AuthService
    ) {}

    public createVenue(venue : Venue) : Observable<Boolean> {

        let params : URLSearchParams = new URLSearchParams();
        params.set('userId', this.AuthService.activeUser._id);

        //TODO: put this in a nice little object
        let body : string = JSON.stringify(venue);
        let headers : Headers = new Headers({ 'Content-Type': 'application/json' });
        let options : RequestOptions = new RequestOptions({headers: headers, search: params});

        return this.http.put(this.userVenueEndpoint, body, options)
            .catch(this.handleError);
    }

    private handleError(error : any) : ErrorObservable {
        let errorMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errorMsg);
    }
}