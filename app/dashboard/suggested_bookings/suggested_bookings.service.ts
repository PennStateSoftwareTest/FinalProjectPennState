/**
 * Created by jnevins on 7/24/16.
 */
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {IVenueSuggestion} from "../../common/interfaces";

@Injectable()
export class SuggestedBookingService {

    private endpoint = 'api/suggestion/:userId';

    constructor(private http : Http) {}

    public getSuggestions(userId : string) {
        let headers : Headers = new Headers({ 'Content-Type': ['application/json'] });
        let params : URLSearchParams = new URLSearchParams();
        params.set('userId', userId);
        let options : RequestOptions = new RequestOptions({headers: headers, search: params});

        return this.http.get(this.endpoint, options)
            .map(this.extractSuggestions)
            .catch(this.handleError);
    }

    private extractSuggestions(response : Response) {
        return <IVenueSuggestion[]>response.json();
    }

    private handleError(error : any) : ErrorObservable {

        //TODO: handle unauthorized and log the user out

        let errorMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errorMsg);
    }
}