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
import {IUserModel, IAuthResponse, IVenue, IOwnership} from "./common/interfaces"
import {Venue} from './common/venue';
import {AuthService} from "./app.auth.service";


@Injectable()
export class VenueService {

    private venueEndpoint = 'api/venue';
    private criteriaEndpoint = 'api/venue/:venueId/ownership/:foreignId/criteria';

    constructor(
        private http : Http,
        private AuthService : AuthService
    ) {}

    public updateCriteria(venueId : string, ownership : IOwnership) : void {

        let params : URLSearchParams = new URLSearchParams();
        params.set('venueId', venueId);
        params.set('foreignId', ownership.foreignId);

        let body : string = JSON.stringify(ownership.criteria);
        let headers : Headers = new Headers({ 'Content-Type': ['application/json'] });
        let options : RequestOptions = new RequestOptions({headers: headers, search: params});

        let put : Observable<Response> = this.http.put(this.criteriaEndpoint, body, options)
            .catch(this.handleError);

        put.subscribe();
    }

    public createVenue(venue : IVenue) : Observable<Venue> {

        //TODO: put this in a nice little object
        let body : string = JSON.stringify(venue);
        let headers : Headers = new Headers({ 'Content-Type': ['application/json'] });
        let options : RequestOptions = new RequestOptions({headers: headers});

        return this.http.post(this.venueEndpoint, body, options)
            .map(this.extractNewVenue)
            .catch(this.handleError);
    }

    public getVenues(userId : string) : Observable<Venue[]> {

        let headers : Headers = new Headers({ 'Content-Type': ['application/json'] });
        let params : URLSearchParams = new URLSearchParams();
        params.set('userId', userId);
        let options : RequestOptions = new RequestOptions({headers: headers, search: params});

        return this.http.get(this.venueEndpoint, options)
            .map(this.extractVenues)
            .catch(this.handleError);
    }

    private extractVenues(response : Response) : IVenue[] {
        let venues : Venue[] = response.json().map((venue : IVenue) => {
            let instanceVenue = new Venue();
            instanceVenue.extendFromObject(venue);

            return instanceVenue;
        });
        return venues || [];
    }

    private extractNewVenue(response : Response) : IVenue {
        let venue : IVenue = response.json();
        let instanceVenue = new Venue();
        instanceVenue.extendFromObject(venue);

        return instanceVenue;
    }

    private handleError(error : any) : ErrorObservable {

        //TODO: handle unauthorized and log the user out

        let errorMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errorMsg);
    }
}