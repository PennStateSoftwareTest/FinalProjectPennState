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
import {IUserModel, IAuthResponse} from "./common/interfaces"

@Injectable()
export class AuthService {

    public isAuthenticated : boolean = false;
    public activeUser : IUserModel = null;

    private endpoint : string = 'api/login';

    constructor(private http : Http) {}

    public login(email : string, password : string) : Observable<boolean> {

        //TODO: refactor this to use an object like newuserservice
        let body : string = JSON.stringify({
            email: email,
            password: password
        });
        let headers : Headers = new Headers({ 'Content-Type': ['application/json'] });
        let options : RequestOptions = new RequestOptions({headers: headers});

        let loginObserver : Observable<boolean> = Observable.create((observer : Observer<boolean>) => {

            let loginPost : Observable<Response> = this.http.post(this.endpoint, body, options);

            //TODO: refactor this... it's ugly
            loginPost.subscribe(
                //Success
                ((response : Response) => {
                    let responseBody : IAuthResponse = response.json();

                    if (responseBody.success) {
                        this.activeUser = responseBody.user;
                        observer.next(responseBody.success);
                    } else {
                        observer.error(new Error());
                    }

                    this.setIsAuthenticated(responseBody.success);
                    observer.complete();
                }).bind(this),
                //Error
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

    public isSessionValid() : Observable<boolean> {

        //TODO: repeating the same messy pattern here.. need to refactor
        let sessionObserver : Observable<boolean> = Observable.create((observer : Observer<boolean>) => {

            let loginGet : Observable<Response> = this.http.get(this.endpoint);

            loginGet.subscribe(
                ((response : Response) => {

                    this.activeUser = <IUserModel>response.json().user;

                    observer.next(true);

                    this.setIsAuthenticated(true);

                    observer.complete();
                }).bind(this),
                //Error
                ((error : any) => {
                    this.setIsAuthenticated(false);

                    observer.error(new Error());

                    observer.complete();
                }).bind(this)
            );
            loginGet.catch((error : any) => {
                return Observable.throw('');
            });
        });

        return sessionObserver;
    }

    public logout() : void {
        this.http.post('api/logout', '').subscribe(
            (response : Response) => {
                this.isAuthenticated = false;
            }
        );
    }

    private setIsAuthenticated(isAuthed : boolean) : void {
        this.isAuthenticated = isAuthed;
    }
}
