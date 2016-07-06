/**
 * Created by jnevins on 5/28/16.
 */
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {User} from "./../common/user";

@Injectable()
export class NewUserService {

    private endpoint : string = 'api/user';

    constructor(private http : Http) {}

    public createUser(user : User) : Observable<boolean> {

        //TODO: put this in a nice little object
        let body : string = JSON.stringify(user);
        let headers : Headers = new Headers({ 'Content-Type': 'application/json' });
        let options : RequestOptions = new RequestOptions({headers: headers});

        return this.http.post(this.endpoint, body, options)
                        .catch(this.handleError);
    }

    private handleError(error : any) : ErrorObservable {
        let errorMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errorMsg);
    }
}