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
import {IUserModel, IAuthResponse, IBand} from "./common/interfaces"
import {Band} from './common/band';
import {AuthService} from "./app.auth.service";


@Injectable()
export class BandService {

    private bandEndpoint = 'api/band';
    private bandEndpointFind = "api/band/findbands";

    constructor(
        private http : Http,
        private AuthService : AuthService
    ) {}

    public createBand(band : IBand) : Observable<Band> {
      
        //TODO: put this in a nice little object
        let body : string = JSON.stringify(band);
        let headers : Headers = new Headers({ 'Content-Type': ['application/json'] });
        let options : RequestOptions = new RequestOptions({headers: headers});

        return this.http.post(this.bandEndpoint, body, options)
            .map(this.extractNewBand)
            .catch(this.handleError);
    }

    public getBands(userId : string) : Observable<Band[]> {


        let headers : Headers = new Headers({ 'Content-Type': ['application/json'] });
        let params : URLSearchParams = new URLSearchParams();
        params.set('userId', userId);
        let options : RequestOptions = new RequestOptions({headers: headers, search: params});

        return this.http.get(this.bandEndpointFind, options)
            .map(this.extractBands)
            .catch(this.handleError);
    }

    private extractBands(response : Response) : Band[] {
        let bands : Band[] = response.json();
        return bands || [];
    }

    private extractNewBand(response : Response) : Band {
        let band : Band = response.json();
        return band;
    }

    private handleError(error : any) : ErrorObservable {

        //TODO: handle unauthorized and log the user out

        let errorMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errorMsg);
    }
}
