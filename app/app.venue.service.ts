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
import {IUserModel, IAuthResponse, IVenue} from "./common/interfaces"
import {Venue} from './common/venue';
import {AuthService} from "./app.auth.service";


@Injectable()
export class VenueService {

    private venueEndpoint = 'api/venue';

    constructor(
        private http : Http,
        private AuthService : AuthService
    ) {}

    public createVenue(venue : IVenue) : Observable<Venue> {

        //TODO: put this in a nice little object
        let body : string = JSON.stringify(venue);
        let headers : Headers = new Headers({ 'Content-Type': 'application/json' });
        let options : RequestOptions = new RequestOptions({headers: headers});

        return this.http.post(this.venueEndpoint, body, options)
            .map(this.extractNewVenue)
            .catch(this.handleError);
    }

    public getVenues(userId : string) : Observable<Venue[]> {


        let headers : Headers = new Headers({ 'Content-Type': 'application/json' });
        let params : URLSearchParams = new URLSearchParams();
        params.set('userId', userId);
        let options : RequestOptions = new RequestOptions({headers: headers, search: params});

        return this.http.get(this.venueEndpoint, options)
            .map(this.extractVenues)
            .catch(this.handleError);
    }

    private extractVenues(response : Response) : Venue[] {
        let venues : Venue[] = response.json();
        return venues || [];
    }

    private extractNewVenue(response : Response) : Venue {
        let venue : Venue = response.json();
        return venue;
    }

    private handleError(error : any) : ErrorObservable {

        //TODO: handle unauthorized and log the user out

        let errorMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errorMsg);
    }
}