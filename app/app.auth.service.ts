/**
 * Created by jnevins on 7/2/16.
 */
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {User} from "./common/user";
import {Observer} from "rxjs/Observer";

@Injectable()
export class AuthService {

    public isAuthenticated : boolean = false;

    private endpoint : string = 'api/login';

    constructor(private http : Http) {
        //TODO: check for a good cookie and initialize isAuthenticated
    }

    public login(email : string, password : string) : Observable<boolean> {

        //TODO: refactor this to use an object like newuserservice
        let body : string = JSON.stringify({
            email: email,
            password: password
        });
        let headers : Headers = new Headers({ 'Content-Type': 'application/json' });
        let options : RequestOptions = new RequestOptions({headers: headers});

        let loginObserver : Observable<boolean> = Observable.create((observer : Observer<boolean>) => {

            let loginPost : Observable<Response> = this.http.post(this.endpoint, body, options);

            //TODO: refactor this... it's ugly
            loginPost.subscribe(
                ((response : Response) => {
                    let responseBody : {success : boolean} = response.json();

                    if (responseBody.success) {
                        observer.next(responseBody.success);
                    } else {
                        observer.error(new Error());
                    }

                    this.setIsAuthenticated(responseBody.success);
                    observer.complete();
                }).bind(this),
                ((error : any) => {
                    this.setIsAuthenticated(false);
                    observer.error(new Error());
                    observer.complete();
                }).bind(this)
            );
            loginPost.catch((error : any) => {
                return Observable.throw('');
            });
        });

        return loginObserver;
    }

    private setIsAuthenticated(isAuthed : boolean) : void {
        this.isAuthenticated = isAuthed;
    }



}